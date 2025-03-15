export const getVerificationTemplate = (verificationLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .content {
            padding: 40px;
        }
        h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
            color: #1a1a1a;
            font-size: 24px;
            margin-top: 0;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #333333;
        }
        .button {
            display: inline-block;
            padding: 15px 35px;
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }
        .features {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 8px;
            margin-top: 30px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
        }
        .feature-item {
            margin-bottom: 20px;
            padding-left: 30px;
            position: relative;
        }
        .feature-item:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #ff0000;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666666;
            background-color: #f8f8f8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Bansuri Vidya Mandir </h1>
        </div>
        <div class="content">
            <h2>Begin Your Journey</h2>
            <p>Dear Valued Trader,</p>
            <p>Welcome to Bansuri Vidya Mandir. Join Bansuri Vidya Mandir - A premier institute dedicated to teaching Indian classical flute (bansuri), traditional music education, and cultural arts. Experience authentic guru-shishya parampara with expert mentorship. Please verify your email address:</p>
            <a href="${verificationLink}" class="button">Verify Email & Start</a>
            <p>If you didn't create an account with Bansuri Vidya Mandir, please disregard this email.</p>
        </div>
        <div class="footer">
            © 2021 Bansuri Vidya Mandir | Terms of Service | Privacy Policy<br>
            This is an automated message. Please do not reply to this email.
        </div>
    </div>
</body>
</html>
`;

export const getDeleteTemplate = (deletionLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Deletion Request - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .content {
            padding: 40px;
        }
        h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
            color: #1a1a1a;
            font-size: 24px;
            margin-top: 0;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #333333;
        }
        .button {
            display: inline-block;
            padding: 15px 35px;
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }
        .warning {
            background-color: #fff3cd;
            border: 1px solid #ffeeba;
            color: #856404;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
            font-size: 16px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .alternatives {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 8px;
            margin-top: 30px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
        }
        .alternative-item {
            margin-bottom: 20px;
            padding-left: 30px;
            position: relative;
        }
        .alternative-item:before {
            content: '➤';
            position: absolute;
            left: 0;
            color: #ff0000;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666666;
            background-color: #f8f8f8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>We Value Your Journey</h1>
        </div>
        <div class="content">
            <h2>Account Deletion Request</h2>
            <p>Dear Valued Trader,</p>
            <p>We've received a request to delete your Bansuri Vidya Mandir  account. Before proceeding, we want to ensure this is your intended action, as it will affect your access and history.</p>
            <p>If you're certain about deleting your account, please click the button below:</p>
            <a href="${deletionLink}" class="button">Confirm Account Deletion</a>
            <div class="warning">
                <strong>Warning:</strong> This action is irreversible. Once deleted, all your history, analysis settings, and personal data will be permanently removed from our systems.
            </div>
            <div class="alternatives">
                <h3>Consider these alternatives:</h3>
                <div class="alternative-item">
                    Temporarily deactivate your account
                </div>
                <div class="alternative-item">
                    Consult with our experts
                </div>
                <div class="alternative-item">
                    Contact our 24/7 support team
                </div>
            </div>
            <p>If you didn't request this deletion, please contact our support team immediately at support@bansurividyamandir.com.</p>
        </div>
        <div class="footer">
            © 2021 Bansuri Vidya Mandir  | Terms of Service | Privacy Policy<br>
            This is an automated message. Please do not reply to this email.
        </div>
    </div>
</body>
</html>
`;

export const getResetTemplate = (resetLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .content {
            padding: 40px;
        }
        h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
            color: #1a1a1a;
            font-size: 24px;
            margin-top: 0;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #333333;
        }
        .button {
            display: inline-block;
            padding: 15px 35px;
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666666;
            background-color: #f8f8f8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Secure Your Account</h1>
        </div>
        <div class="content">
            <h2>Reset Your Password</h2>
            <p>Dear Valued Trader,</p>
            <p>We received a request to reset the password for your Bansuri Vidya Mandir  account. To ensure the security of your account and maintain uninterrupted access to your activities, please click the button below:</p>
            <a href="${resetLink}" class="button">Reset Password</a>
            <p>If you didn't request this password reset, please contact our security team immediately at support@bansurividyamandir.com</p>
        </div>
        <div class="footer">
            © 2021 Bansuri Vidya Mandir  | Terms of Service | Privacy Policy<br>
            This is an automated message. Please do not reply to this email.
        </div>
    </div>
</body>
</html>
`;

export const getFeeReceiptTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fee Payment Receipt - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .content {
            padding: 40px;
        }
        h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
            color: #1a1a1a;
            font-size: 24px;
            margin-top: 0;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #333333;
        }
        .button {
            display: inline-block;
            padding: 15px 35px;
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666666;
            background-color: #f8f8f8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Payment Confirmation</h1>
        </div>
        <div class="content">
            <h2>Fee Payment Receipt</h2>
            <p>Dear ${data.userName},</p>
            <p>Thank you for your payment. Your transaction was successful.</p>
            <div class="payment-details">
                <p><strong>Amount Paid:</strong> ₹${data.amount}</p>
                <p><strong>Payment ID:</strong> ${data.paymentId}</p>
                <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString()}</p>
            </div>
            <p>Please find your receipt attached to this email.</p>
        </div>
        <div class="footer">
            © ${new Date().getFullYear()} Bansuri Vidya Mandir <br>
            This is an automated message. Please do not reply.
        </div>
    </div>
</body>
</html>
`;

export const getFeeNotificationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Fee Assignment - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-align: center;
            padding: 30px;
            border-radius: 10px 10px 0 0;
        }
        .content {
            padding: 30px;
        }
        .fee-details {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .fee-item {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .important {
            color: #cc0000;
            font-weight: bold;
        }
        .btn {
            display: inline-block;
            padding: 12px 25px;
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f8f8;
            border-radius: 0 0 10px 10px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Fee Assignment</h1>
        </div>
        <div class="content">
            <h2>Fee Details</h2>
            <div class="fee-details">
                <div class="fee-item">
                    <strong>Title:</strong>
                    <span>${data.title}</span>
                </div>
                <div class="fee-item">
                    <strong>Amount:</strong>
                    <span class="important">₹${data.amount}</span>
                </div>
                <div class="fee-item">
                    <strong>Due Date:</strong>
                    <span class="important">${new Date(data.dueDate).toLocaleDateString()}</span>
                </div>
                ${data.description ? `
                <div class="fee-item">
                    <strong>Description:</strong>
                    <span>${data.description}</span>
                </div>
                ` : ''}
                ${data.lateFeeDate ? `
                <div class="fee-item">
                    <strong>Late Fee After:</strong>
                    <span class="important">${new Date(data.lateFeeDate).toLocaleDateString()}</span>
                </div>
                ` : ''}
                ${data.lateFeeAmount ? `
                <div class="fee-item">
                    <strong>Late Fee Amount:</strong>
                    <span class="important">₹${data.lateFeeAmount}</span>
                </div>
                ` : ''}
            </div>
            <p>Please ensure timely payment to avoid any late fees.</p>
            <a href="${process.env.FRONTEND_URL}/dashboard/fees" class="btn">View Fee Details</a>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Bansuri Vidya Mandir </p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;

export const getPaymentSuccessTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Successful - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .success-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }
        .content {
            padding: 40px;
        }
        .payment-details {
            background-color: #f0fdf4;
            border: 1px solid #dcfce7;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #dcfce7;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
        .amount {
            font-size: 24px;
            color: #16a34a;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f8f8;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="success-icon">✓</div>
            <h1>Payment Successful!</h1>
        </div>
        <div class="content">
            <p>Dear ${data.userName},</p>
            <p>Your payment has been successfully processed. Here are your transaction details:</p>
            
            <div class="payment-details">
                <div class="detail-row">
                    <strong>Amount Paid:</strong>
                    <span class="amount">₹${data.amount}</span>
                </div>
                <div class="detail-row">
                    <strong>Receipt Number:</strong>
                    <span>${data.receiptNumber}</span>
                </div>
                <div class="detail-row">
                    <strong>Payment ID:</strong>
                    <span>${data.paymentId}</span>
                </div>
                <div class="detail-row">
                    <strong>Date:</strong>
                    <span>${new Date(data.date).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})}</span>
                </div>
                <div class="detail-row">
                    <strong>Fee Type:</strong>
                    <span>${data.feeTitle}</span>
                </div>
            </div>

            <p>Your payment receipt has been attached to this email for your records.</p>
            <p>Thank you for your prompt payment!</p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Bansuri Vidya Mandir </p>
            <p>For any queries, please contact our support team at support@Bansuri Vidya Mandir .com</p>
        </div>
    </div>
</body>
</html>
`;

export const getPaymentFailureTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Failed - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .failed-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }
        .content {
            padding: 40px;
        }
        .error-box {
            background-color: #fef2f2;
            border: 1px solid #fee2e2;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .retry-button {
            display: inline-block;
            background: #ef4444;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f8f8;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="failed-icon">✕</div>
            <h1>Payment Failed</h1>
        </div>
        <div class="content">
            <p>Dear ${data.userName},</p>
            <p>We're sorry, but your recent payment attempt was unsuccessful.</p>
            
            <div class="error-box">
                <h3>Transaction Details:</h3>
                <p><strong>Amount:</strong> ₹${data.amount}</p>
                <p><strong>Date:</strong> ${new Date(data.date).toLocaleString('en-IN')}</p>
                <p><strong>Fee Type:</strong> ${data.feeTitle}</p>
                <p><strong>Error:</strong> ${data.error || 'Transaction could not be completed'}</p>
            </div>

            <p>Possible reasons for payment failure:</p>
            <ul>
                <li>Insufficient funds in your account</li>
                <li>Bank server issues</li>
                <li>Network connectivity problems</li>
                <li>Transaction timeout</li>
            </ul>

            <p>Please try again or contact your bank if the issue persists.</p>
            
            <a href="${process.env.FRONTEND_URL}/dashboard/fees" class="retry-button">
                Retry Payment
            </a>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Bansuri Vidya Mandir </p>
            <p>Need help? Contact our support team at support@Bansuri Vidya Mandir .com</p>
        </div>
    </div>
</body>
</html>
`;

export const getFeeUpdateTemplate = ({ name, feeTitle, oldAmount, newAmount, oldDate, newDate, reason }) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #EF4444; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .footer { text-align: center; padding: 20px; color: #666; }
        .amount { font-size: 18px; font-weight: bold; color: #EF4444; }
        .details { margin: 20px 0; padding: 15px; background: white; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Fee Update Notification</h2>
        </div>
        <div class="content">
            <p>Dear ${name},</p>
            <p>This is to inform you that there has been an update to your fee: <strong>${feeTitle}</strong></p>
            
            <div class="details">
                <h3>Update Details:</h3>
                <p><strong>Amount:</strong> ₹${oldAmount} → ₹${newAmount}</p>
                <p><strong>Due Date:</strong> ${oldDate} → ${newDate}</p>
                <p><strong>Reason:</strong> ${reason}</p>
            </div>

            <p>If you have any questions, please contact our support team.</p>
        </div>
        <div class="footer">
            <p>Bansuri Vidya Mandir | Indian Classical Music Institute</p>
            <small>This is an automated message, please do not reply.</small>
        </div>
    </div>
</body>
</html>
`;

export const getCertificateGeneratedTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate Generated - Bansuri Vidya Mandir </title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .content {
            padding: 40px;
        }
        h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
            color: #1a1a1a;
            font-size: 24px;
            margin-top: 0;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #333333;
        }
        .certificate-info {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 8px;
            margin-top: 30px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
        }
        .certificate-id {
            font-family: monospace;
            background: #f0f0f0;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
        }
        .button {
            display: inline-block;
            padding: 15px 35px;
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
            margin: 20px 0;
        }
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666666;
            background-color: #f8f8f8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Congratulations!</h1>
        </div>
        <div class="content">
            <h2>Course Completion Achievement</h2>
            <p>Dear ${data.userName},</p>
            <p>We are delighted to inform you that you have successfully completed the course:</p>
            <h3 style="color: #cc0000;">${data.courseName}</h3>
            
            <div class="certificate-info">
                <p><strong>Your certificate has been generated!</strong></p>
                <p>Certificate ID: <span class="certificate-id">${data.certificateId}</span></p>
                <p>You can now access and download your certificate from your profile.</p>
            </div>

            <center>
                <a href="${process.env.FRONTEND_URL}/user-profile" class="button">View Certificate</a>
            </center>

            <p>This certificate validates your dedication and commitment to learning. Keep up the excellent work!</p>
        </div>
        <div class="footer">
            © ${new Date().getFullYear()} Bansuri Vidya Mandir <br>
            This is an automated message. Please do not reply to this email.
        </div>
    </div>
</body>
</html>
`;

// New contact form email template
export const getContactFormTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Bansuri Vidya Mandir</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: #ffffff;
            text-align: center;
            padding: 30px;
        }
        .content {
            padding: 30px;
        }
        h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        h2 {
            color: #1a1a1a;
            font-size: 22px;
            margin-top: 0;
        }
        .message-box {
            background-color: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .contact-details {
            margin-top: 30px;
            padding: 20px;
            background-color: #f0f0f0;
            border-radius: 8px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666666;
            background-color: #f8f8f8;
        }
        .detail-row {
            margin-bottom: 10px;
        }
        .detail-label {
            font-weight: bold;
            display: inline-block;
            width: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <h2>${data.subject || 'Website Contact Form'}</h2>
            
            <div class="message-box">
                <p>${data.message}</p>
            </div>
            
            <div class="contact-details">
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span>${data.name}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span>${data.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span>${data.phone}</span>
                </div>
            </div>
            
            <p>Please respond to this inquiry at your earliest convenience.</p>
        </div>
        <div class="footer">
            © ${new Date().getFullYear()} Bansuri Vidya Mandir<br>
            This is an automated message from your website contact form.
        </div>
    </div>
</body>
</html>
`;
