const LIST_DATA = [
    "Information We Collect",
    "How We Use Your Information",
    "How Your Data Is Stored",
    "Cloud Storage and Third-Party Services",
    "Notifications",
    "Data Sharing",
    "Data Retention",
    "Your Choices and Rights",
    "Account and Data Deletion",
    "Children's Privacy",
    "Health and Wellness Disclaimer",
    "Data Security",
    "Changes to This Privacy Policy",
    "Contact Us"
]

const LEGAL_DATA = [
    {
        title:'Information We Collect',
        para:[
            "The information we collect depends on how you use Droply and which features you choose to access.",
            "Droply may allow you to provide information such as:"
        ],
        points:[
            "Name",
            "Age",
            "Gender",
            "Weight",
            "Wake-up time",
            "Bedtime",
            "Daily water intake",
            "Hydration goals and preferences",
        ],
        title2:"This information helps us provide personalized hydration goals, reminders, and insights."
    },
    {
        title:'Account Information',
        para:[
            "You may be able to use Droply without creating an account.",
            "If you choose to create an account for features such as cloud backup or synchronization, we may collect information associated with your account, such as your email address and authentication details."
        ]
    },
    {
        title:'Automatically Collected Information',
        para:[
            "Depending on the features and services enabled in the App, certain technical information may be collected automatically, such as:",
            "Some features, such as cloud backup or synchronization, may require you to create an account. You are responsible for keeping your account information secure and for any activity carried out through your account.",
        ],
        points:[
            "Device type and operating system",
            "App version",
            "Basic diagnostic and performance information",
            "Crash reports or technical logs",
        ],
        title2: "We use this information to maintain, improve, and secure Droply."
    },
    {
        title:'How We Use Your Information',
        para:[
            "We may use your information to:",
        ],
        points:[
            "Calculate estimated daily hydration goals.",
            "Provide water intake tracking and reminders.",
            "Personalize your experience within Droply.",
            "Save and synchronize your data when cloud features are enabled.",
            "Improve app performance, reliability, and usability.",
            "Respond to support requests and feedback.",
            "Detect, prevent, and address technical issues or misuse.",
            "Comply with applicable legal obligations.",
        ],
        title2:"We do not use your personal information for purposes unrelated to the operation and improvement of Droply unless permitted by law or with your consent."
    },
    {
        title:'How Your Data Is Stored',
        para:[
            "Droply may store information locally on your device for core app functionality.",
            "If you use cloud backup or synchronization features, your information may also be stored securely through trusted third-party cloud service providers.",
            "The location and retention of stored information may depend on the services and features you use.",
            "We take reasonable measures to protect your information against unauthorized access, loss, misuse, or alteration. However, no method of electronic storage or transmission can be guaranteed to be completely secure.",
        ]
    },
    {
        title:'Cloud Storage and Third-Party Services',
        para:[
            "Droply may offer cloud backup or synchronization features.",
            "If these features are available, your information may be securely stored and processed through trusted third-party cloud service providers.",
            "These providers may support services such as:"
        ],
        points:[
            "Account authentication",
            "Cloud storage",
            "Database management",
            "Data synchronization",
            "Technical infrastructure",
        ]
    },
    {
        title:'Health and Medical Disclaimer',
        para:[
            "Droply is a hydration tracking and reminder tool. It does not provide medical advice, diagnosis, or treatment and is not a medical device.",
            "Hydration goals, reminders, and other information provided by Droply are estimates intended for general wellness purposes only. Individual hydration needs may vary depending on factors such as health, activity level, climate, medications, and other circumstances.",
            "Do not rely on Droply as a substitute for advice from a qualified healthcare professional. If you have a medical condition or concerns about your hydration needs, consult an appropriate healthcare professional.",
            "You use the information provided by Droply at your own discretion and risk."
        ],
        title2:"The specific service providers we use may change over time. We take reasonable steps to work with providers that maintain appropriate privacy and security practices. Your use of certain third-party services may also be subject to their own terms and privacy policies."
    },
    {
        title:'Notifications',
        para:[
            "Droply may request permission to send notifications for hydration reminders and other relevant app updates.",
            "You can manage notification permissions at any time through your device settings.",
            "Disabling notifications will not necessarily delete your personal information or account data."
        ]
    },
    {
        title:'Data Sharing',
        para:[
            "We do not sell your personal information.",
            "We may share limited information with trusted service providers when necessary to operate, maintain, secure, or improve Droply.",
            "We may also disclose information when required by applicable law, legal process, or to protect the rights, safety, and security of our users, services, or others."
        ]
    },
    {
        title:'Data Retention',
        para:[
            "We retain personal information only for as long as reasonably necessary to provide the Services, maintain account functionality, comply with legal obligations, resolve disputes, and enforce our agreements.",
            "The retention period may vary depending on the type of information and how you use Droply."
        ]
    },
    {
        title:'Your Choices and Rights',
        para:[
            "Depending on applicable law and the features available in Droply, you may have the right to:",
        ],
        points:[
            "Access the personal information associated with your account.",
            "Request correction of inaccurate information.",
            "Request deletion of your account or personal information.",
            "Disable notifications through your device settings.",
            "Stop using cloud synchronization features.",
        ],
        title2:"To make a privacy-related request, you can contact us using the details provided below."
    },
    {
        title:'Account and Data Deletion',
        para:[
            "If you create a Droply account, you may request deletion of your account and associated personal information through the available deletion options in the App or by contacting our support team.",
            "Some information may be retained where necessary to comply with legal obligations, prevent fraud, resolve disputes, or maintain security.",
            "Once deleted, account information may not be recoverable.",
        ]
    },
    {
        title:"Children's Privacy",
        para:[
            "Droply is not specifically directed toward children.",
            "We do not knowingly collect personal information from children where prohibited by applicable law.",
            "If you believe a child has provided personal information to us without appropriate consent, please contact us so that we can take appropriate action."
        ]
    },
    {
        title:'Health and Wellness Disclaimer',
        para:[
            "Droply provides hydration tracking, reminders, and estimated hydration goals for general wellness purposes.",
            "The information and recommendations provided by Droply are not medical advice and should not be used to diagnose, treat, or prevent any medical condition.",
            "Individual hydration needs vary. If you have health concerns or a medical condition that affects hydration, please consult a qualified healthcare professional."
        ]
    },
    {
        title:'Data Security',
        para:[
            "We use reasonable administrative, technical, and organizational measures to help protect personal information.",
            "However, no digital service can guarantee complete security. You should also take reasonable steps to protect your account credentials and device.",
        ]
    },
    {
        title:'Changes to This Privacy Policy',
        para:[
            "We may update this Privacy Policy from time to time to reflect changes in Droply, our Services, or applicable legal requirements.",
            "If we make significant changes, we may provide notice through the App or our website.",
            "The updated Privacy Policy will become effective when posted unless otherwise stated.",
            "We encourage you to review this page periodically to stay informed about how we handle your information.",
        ]
    },
    {
        title:'Contact Us',
        para:[
            "If you have any questions, concerns, or requests regarding these Terms, please contact us.",
            "Support Email: supportgigax@gmail.com"
        ]
    },
]