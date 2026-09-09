# PayMate Integration Handoff Document for Budgetree

This document consolidates all current PayMate integration parameters, endpoints, credentials, and the technical checklist required by the **Budgetree** development team to integrate PayMate payment processing into the KAMALO Web App and Mobile App.

---

## 1. Current Environment & Credentials (Sandbox / Beta)

The following credentials and endpoints are currently configured and available:

| Parameter | Value | Description |
| :--- | :--- | :--- |
| **Environment** | Staging / Beta | `https://dev.paymate.in/beta/` |
| **Merchant ID** | `05A33EF0-D6F3-441C-A719-70F79F4C11DA` | PayMate Merchant Identifier |
| **Terminal ID** | `1AC034FD-8456-49CD-90C1-E0D28ADEBD66` | Payment Terminal Identifier |
| **Business Xpress ID** | `AAAA0157A4` | Business Account Identifier |
| **Collect Payments API** | `https://dev.paymate.in/beta/PartnerStack/api/v2/CollectPayments` | Direct API Endpoint for payment collection |
| **Hosted Checkout Link** | `https://dev.paymate.in/beta/PMX3.0/Checkout.aspx?guid=9EEAF56B4B846F0D28CC17B10D82056D&paymatemodes=DDE2B5FE67096EC70D24181156D668CA` | Hosted PayMate checkout page URL |
| **Session GUID** | `9EEAF56B4B846F0D28CC17B10D82056D` | Checkout Session GUID |
| **PayMate Modes Token** | `DDE2B5FE67096EC70D24181156D668CA` | Allowed payment mode token |

---

## 2. Integration Technical Checklist for Budgetree

To build a complete, robust, and production-ready payment flow in the app & web application, Budgetree will need to confirm / implement the following:

### A. API Specifications & Endpoints
- [x] **Staging API Endpoint**: `https://dev.paymate.in/beta/PartnerStack/api/v2/CollectPayments`
- [ ] **Production API Endpoint**: Must be requested from PayMate prior to official launch.
- [ ] **API Payload Schema & Documentation**: Official PDF/Swagger specification for the `CollectPayments` API (to verify exact parameter keys for `amount`, `orderReferenceId`, `customerEmail`, `customerMobile`, `currency`, `returnUrl`).
- [ ] **API Secret Key / Signature**: Confirm with PayMate if request signing (e.g. SHA-256 HMAC signature key) or Bearer Authentication token is required for server-to-server calls.

### B. Webhooks & Transaction Status Callback
- [ ] **Server Webhook Handler**: Budgetree backend team needs to implement a webhook listener endpoint (e.g. `POST /api/v1/payments/paymate/callback`) to receive instant server-to-server transaction status updates (Success / Failure / Pending).
- [ ] **Webhook Signature Key**: Secret key provided by PayMate to verify incoming webhook payloads and prevent payload forgery.
- [ ] **Redirect URLs (Success & Failure Pages)**:
  - `successUrl`: Frontend URL where users return after successful payment.
  - `failureUrl`: Frontend URL where users return if payment fails or is declined.
  - `cancelUrl`: Frontend URL if user cancels checkout.

### C. Testing & Sandbox Access
- [x] **Beta Checkout Link**: Verified working link for testing payment flow redirects.
- [ ] **Test Payment Credentials**: Test UPI IDs, mock Net Banking accounts, and test Card details (Card Number, Expiry, CVV, OTP) provided by PayMate for sandbox validation.

---

## 3. Summary of Information Readiness

| Information Category | Readiness | Next Action |
| :--- | :--- | :--- |
| **Merchant Credentials** | ✅ **Complete** | Hand over `MerchantId`, `TerminalId`, `BusinessXpressID` to Budgetree. |
| **Sandbox API & Checkout Link** | ✅ **Complete** | Hand over API URL and Beta Checkout link to Budgetree. |
| **API Payload & Swagger Docs** | ⏳ **Pending** | Request official `CollectPayments` v2 API spec PDF from PayMate. |
| **API Secret / HMAC Key** | ⏳ **Pending** | Request Webhook Secret & Hash Key from PayMate account manager. |
| **Production Credentials** | ⏳ **Pending** | Request Production Merchant ID & Live API URLs before final launch. |
