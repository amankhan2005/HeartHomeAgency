 import Contact from "../models/contact.models.js";
import { sendMail } from "../utils/sendMail.js";

/* ---------------- HTML Escape ---------------- */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ---------------- Email Templates ---------------- */
const adminHtml = (c) => `
<h2>New Contact Message</h2>
<p><b>Name:</b> ${escapeHtml(c.firstName)} ${escapeHtml(c.lastName)}</p>
<p><b>Email:</b> ${escapeHtml(c.email)}</p>
<p><b>Phone:</b> ${escapeHtml(c.phone)}</p>
<p><b>Message:</b><br/>${escapeHtml(c.message)}</p>
<hr/>
<p><small>
IP: ${escapeHtml(c.ipAddress || "Unknown")}<br/>
Agent: ${escapeHtml(c.userAgent || "Unknown")}
</small></p>
`;

const userHtml = (c) => `
<p>Hello ${escapeHtml(c.firstName)},</p>
<p>Thank you for contacting <b>Gentle Hearts Home Health Care</b>.</p>
<p>We have received your message and will get back to you shortly.</p>
<hr/>
<p><b>Your Message:</b><br/>${escapeHtml(c.message)}</p>
<br/>
<p>Warm regards,<br/>Gentle Hearts Care Team</p>
`;

/* ------------------------------------------------ */
/* CREATE CONTACT (PUBLIC)                          */
/* ------------------------------------------------ */
export const createContact = (req, res) => {
  // ✅ instant response (UX friendly)
  res.status(202).json({
    ok: true,
    message: "Message received. We will contact you shortly.",
  });

  // ✅ background processing
  setImmediate(async () => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      // ✅ model-level required fields validation
      if (!firstName || !lastName || !email || !phone || !message) {
        console.warn("⚠️ Contact skipped: missing required fields");
        return;
      }

      const contact = await Contact.create({
        firstName,
        lastName,
        email,
        phone,
        message,
        source: "Contact Page",
        status: "new", // ✅ matches model enum
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
      });

      // ✅ notify admin
      await sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact Message",
        html: adminHtml(contact),
        replyTo: contact.email,
      });

      // ✅ confirmation to user
      await sendMail({
        to: contact.email,
        subject: "We received your message",
        html: userHtml(contact),
      });

    } catch (err) {
      console.error("❌ Background contact error:", err);
    }
  });
};

/* ------------------------------------------------ */
/* GET ALL CONTACTS (ADMIN)                         */
/* ------------------------------------------------ */
export const getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ ok: true, contacts });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* GET CONTACT BY ID (ADMIN)                        */
/* ------------------------------------------------ */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, contact });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* UPDATE CONTACT STATUS (ADMIN)                    */
/* ------------------------------------------------ */
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // ✅ matches model enum exactly
    const allowedStatus = ["new", "replied", "closed"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        ok: false,
        message: "Invalid status value",
      });
    }

    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }

    res.json({ ok: true, contact: updated });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* DELETE CONTACT (ADMIN)                           */
/* ------------------------------------------------ */
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
