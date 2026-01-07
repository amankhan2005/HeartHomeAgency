 import Contact from "../models/contact.models.js";
import { sendMail } from "../utils/sendMail.js";

/* ------------------------------------------------ */
/* Helper: escape HTML (email safety)               */
/* ------------------------------------------------ */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ------------------------------------------------ */
/* CREATE CONTACT (Public)                          */
/* ------------------------------------------------ */
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body || {};

    /* ---------- VALIDATION ---------- */
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        ok: false,
        message: "All fields are required.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        ok: false,
        message: "Message is too long.",
      });
    }

    /* ---------- SAVE TO DB ---------- */
    const contact = await Contact.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      source: "Contact Page",
      ipAddress:
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket?.remoteAddress ||
        "N/A",
      userAgent: req.get("User-Agent") || "N/A",
    });

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    /* ===================================================== */
    /* ADMIN EMAIL TEMPLATE (Blue / White – Professional)    */
    /* ===================================================== */
  const adminHtml = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#FFF5F8;padding:32px;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <tr>
          <td style="background:#AF3059;color:#ffffff;padding:22px 30px;">
            <h2 style="margin:0;font-size:22px;">Gentle Hearts Home Health Care</h2>
            <p style="margin:6px 0 0;font-size:14px;opacity:0.95;">
              New Contact Inquiry Received
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;color:#333;">
            <h3 style="color:#0B3A6A;margin-top:0;">📩 Contact Form Submission</h3>

            <table width="100%" cellpadding="10" cellspacing="0" style="font-size:14px;border-collapse:collapse;">
              <tr>
                <td width="35%" style="color:#555;"><strong>Name</strong></td>
                <td>${escapeHtml(contact.firstName)} ${escapeHtml(contact.lastName)}</td>
              </tr>
              <tr>
                <td style="color:#555;"><strong>Email</strong></td>
                <td>${escapeHtml(contact.email)}</td>
              </tr>
              <tr>
                <td style="color:#555;"><strong>Phone</strong></td>
                <td>${escapeHtml(contact.phone)}</td>
              </tr>
              <tr>
                <td valign="top" style="color:#555;"><strong>Message</strong></td>
                <td>${escapeHtml(contact.message)}</td>
              </tr>
            </table>

            <hr style="margin:28px 0;border:none;border-top:1px solid #F1D2DC;" />

            <p style="font-size:12px;color:#777;line-height:1.6;">
              <strong>Source:</strong> ${escapeHtml(contact.source)}<br/>
              <strong>IP Address:</strong> ${escapeHtml(contact.ipAddress)}<br/>
              <strong>User Agent:</strong> ${escapeHtml(contact.userAgent)}
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#FFF0F5;padding:16px;text-align:center;font-size:12px;color:#666;">
            Gentle Hearts Home Health Care Agency • Private-Pay In-Home Care
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

    /* ===================================================== */
    /* USER CONFIRMATION EMAIL (Warm + Reassuring)           */
    /* ===================================================== */
  const userHtml = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#FFF5F8;padding:32px;font-family:Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#AF3059;color:#ffffff;padding:26px 30px;">
            <h2 style="margin:0;font-size:22px;">Gentle Hearts Home Health Care</h2>
            <p style="margin:6px 0 0;font-size:14px;">
              Compassionate In-Home Care
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;color:#333;">
            <h3 style="color:#0B3A6A;margin-top:0;">
              Thank You for Contacting Us
            </h3>

            <p>Hello ${escapeHtml(contact.firstName)},</p>

            <p style="line-height:1.7;">
              Thank you for reaching out to <strong>Gentle Hearts Home Health Care</strong>.
              We’ve received your message, and a member of our care coordination
              team will contact you shortly.
            </p>

            <div style="background:#FFF0F5;border-left:4px solid #AF3059;padding:16px;margin:24px 0;">
              <strong>Your Message:</strong><br/>
              ${escapeHtml(contact.message)}
            </div>

            <p style="line-height:1.7;">
              Our mission is to deliver dignified, personalized, and clinically
              guided care in the comfort of home — with compassion at every step.
            </p>

            <p style="margin-top:28px;">
              Warm regards,<br/>
              <strong>Gentle Hearts Care Team</strong>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#FFF0F5;padding:16px;text-align:center;font-size:12px;color:#666;">
            © ${new Date().getFullYear()} Gentle Hearts Home Health Care Agency
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

    /* ---------- SEND EMAILS ---------- */
    try {
      await Promise.all([
        sendMail({
          to: ADMIN_EMAIL,
          subject: "📩 New Contact Message – Decoder Health",
          html: adminHtml,
          replyTo: contact.email,
        }),
        sendMail({
          to: contact.email,
          subject: "We’ve received your message – Decoder Health",
          html: userHtml,
        }),
      ]);
    } catch (mailErr) {
      console.error("Mail error:", mailErr.message);
    }

    return res.status(201).json({
      ok: true,
      message: "Message submitted successfully.",
      contactId: contact._id,
    });
  } catch (error) {
    console.error("Create Contact Error:", error);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

/* ------------------------------------------------ */
/* GET ALL CONTACTS (Admin)                         */
/* ------------------------------------------------ */
export const getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return res.json({ ok: true, contacts });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* GET CONTACT BY ID (Admin)                        */
/* ------------------------------------------------ */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).lean();
    if (!contact) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    return res.json({ ok: true, contact });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* UPDATE CONTACT STATUS (Admin)                    */
/* ------------------------------------------------ */
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }

    return res.json({ ok: true, contact: updated });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* DELETE CONTACT (Admin)                           */
/* ------------------------------------------------ */
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    return res.json({ ok: true, message: "Contact deleted successfully" });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
};
