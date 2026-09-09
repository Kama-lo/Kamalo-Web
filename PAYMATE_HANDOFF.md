# PayMate Integration Handoff Document for Budgetree

This document consolidates all PayMate integration parameters, test credentials, endpoints, and the specific inputs **Budgetree** needs to provide to PayMate for server whitelisting and payment callbacks.

---

## 1. Current Environment Credentials & Endpoints (Sandbox / Beta)

The following credentials, API endpoints, and test card details are configured and ready:

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

## 2. PayMate Sandbox Test Credentials

Use the following card details to test sandbox payment transactions:

| Detail | Test Value |
| :--- | :--- |
| **Test Card Number** | `4622943127013705` |
| **Expiry Date** | `12/2029` |
| **CVV** | `123` |
| **Postman Collection** | Attached by PayMate (Share with Budgetree API developers) |

---

## 3. Required Inputs FROM Budgetree (To Submit to PayMate)

PayMate requires Budgetree to provide the following 3 environment details so PayMate can enable IP whitelisting and payment callback notifications:

| # | Requested Detail | Description | Responsible Party | Status |
| :---: | :--- | :--- | :---: | :---: |
| **1** | **UAT Server IP Address** | The static IP address of Budgetree's UAT/Staging server (required by PayMate for API firewall whitelisting). | **Budgetree Backend Team** | ⏳ Awaiting Input |
| **2** | **Webhook URL (UAT)** | Server endpoint (e.g. `https://uat-api.budgetree-server.com/api/v1/paymate/webhook`) built by Budgetree to listen for transaction status updates. | **Budgetree Backend Team** | ⏳ Awaiting Input |
| **3** | **Merchant Return Page URL** | Frontend checkout redirect page URL (e.g. `https://uat.kamalo.app/checkout/status`) where users are redirected after payment completion/cancellation. | **Budgetree Frontend Team** | ⏳ Awaiting Input |

---

## 4. Next Steps & Workflow

1. **Send to Budgetree**: Forward this document, `.env` file, and PayMate Postman Collection to Budgetree's engineering lead.
2. **Collect 3 Details from Budgetree**:
   - UAT Server IP Address
   - Webhook URL (UAT)
   - Merchant Return Page URL (Checkout Flow)
3. **Submit to PayMate**: Send these 3 details back to the PayMate onboarding team so they can activate webhook pushing and IP whitelisting on dev.paymate.in.
