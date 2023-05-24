window.settings = {
  i18n: {
    defaultlocale: "en",
    /* Set to 'browser' to use browser locale */
    languages: ["en", "fr"],
    showLangSwitch: true,
    /* set to true to show the language switcher */
  },
  general: {
    theming: {
      override: false,
      interactiveColor: "#076bc9",
      brandColor: "#005501",
    },
    ga: {
      enabled: true,
      trackingid: "G-RJ6VT2L72P",
    },
    connection: {
      type: "mashup",
      authtype: "basic",
      clientid: "",
      clientsecret: "",
      webportal: "",
      c11nserver: "",
      showAttachments: true,
    },
    auth_2fa: {
      enabled: false,
      sendMode: "email",
      url: "",
      emailSettings: {
        correspondenceName: "pyDefaultOTPCorr",
        emailAccount: "Default",
        subject: "New OTP Request",
        validateMaxAge: "false",
      },
      smsSettings: {
        from: "Pega",
        account: "Default",
        message: "Uplus OTP login code",
        validateMaxAge: "false",
      },
    },
  },
  quicklinks: [
    {
      title: {
        en: "Request a service",
        fr: "Demander un service",
      },
      action: "createNewWork",
      actionparam: "",
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: "",
      extraparam: "",
      hide: false,
      channelid: "",
      tenantid: "",
      dataretained: true,
      hideassignmentheader: false,
      hideusers: "",
      heading: '',
    },
    {
      title: {
        en: "Make a payment",
        fr: "Faire un paiement",
      },
      action: "createNewWork",
      actionparam: "",
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: "",
      extraparam: "",
      hide: false,
      channelid: "",
      tenantid: "",
      dataretained: true,
      hideassignmentheader: false,
      hideusers: "",
      heading: '',
    },
    {
      title: {
        en: "Update billing",
        fr: "Mettre a jour ses informations de paiment",
      },
      action: "createNewWork",
      actionparam: "",
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: "",
      extraparam: "",
      hide: false,
      channelid: "",
      tenantid: "",
      dataretained: true,
      hideassignmentheader: false,
      hideusers: "",
      heading: '',
    },
    {
      title: {
        en: "Proof of insurance",
        fr: "Certificat d'assurance",
      },
      action: "createNewWork",
      actionparam: "",
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: "",
      extraparam: "",
      hide: false,
      channelid: "",
      tenantid: "",
      dataretained: true,
      hideassignmentheader: false,
      hideusers: "",
      heading: '',
    },
    {
      title: {
        en: "Update your profile",
        fr: "Mettre a jour votre profil",
      },
      action: "createNewWork",
      actionparam: "",
      objclass: "",
      url: "",
      startcase: "pyStartCase",
      application: "",
      icon: "",
      extraparam: "",
      hide: false,
      channelid: "",
      tenantid: "",
      dataretained: true,
      hideassignmentheader: false,
      hideusers: "",
    },
  ],
  billpay: {
    action: "createNewWork",
    actionparam: "",
    objclass: "",
    url: "",
    startcase: "pyStartCase",
    application: "",
    extraparam: "",
    hidebillpay: false,
    channelid: "",
    tenantid: "",
    dataretained: true,
    hideassignmentheader: false,
    heading: '',
  },
  banner: {
    action: "createNewWork",
    actionparam: "",
    objclass: "",
    url: "",
    startcase: "pyStartCase",
    application: "",
    extraparam: "",
    hidebanner: true,
    hidebanner_button: false,
    color: "#CE9840",
    channelid: "",
    tenantid: "",
    dataretained: true,
    hideassignmentheader: false,
    heading: '',
  },
  todo: {
    action: "createNewWork",
    actionparam: "",
    objclass: "",
    url: "",
    startcase: "pyStartCase",
    application: "",
    extraparam: "",
    hideactivity: false,
    hideaccount: false,
    hideaccountdetails: false,
    hideKPI: true,
    channelid: "",
    tenantid: "",
    dataretained: true,
    hideassignmentheader: false,
    heading: '',
  },
  kmhelp: {
    action: "display",
    actionparam: "KMHelpSitePortal",
    objclass: "Data-Portal",
    url: "",
    startcase: "pyStartCase",
    application: "",
    extraparam: "",
    username: "",
    password: "",
    channelid: "",
    tenantid: "",
    dataretained: true,
    hideassignmentheader: false,
    heading: '',
  },
  activity: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
    hideassignmentheader: false,
    heading: '',
  },
  homeheroaction: {
    action: "createNewWork",
    actionparam: "",
    objclass: "",
    url: "",
    startcase: "pyStartCase",
    application: "",
    pega_userid: "",
    pega_pwd: "",
    extraparam: "",
    channelid: "",
    tenantid: "",
    dataretained: true,
    hideassignmentheader: false,
    heading: '',
  },
  offeraction: {
    action: "createNewWork",
    actionparam: "",
    objclass: "",
    url: "",
    startcase: "pyStartCase",
    application: "",
    pega_userid: "",
    pega_pwd: "",
    extraparam: "",
    channelid: "",
    tenantid: "",
    dataretained: true,
    hideassignmentheader: false,
    heading: '',
  },
  users: [
    {
      username: "joe@pegasystems.com",
      password: "rules",
      img: "avatar-1.jpg",
      company_name: "",
      name: "Joe Smith",
      accountID: "",
      contactID: "",
      customerID: "",
      extraparam: "",
      dmm_context_data: "",
      pega_userid: "jsmith",
      pega_pwd: "rules",
      bill_pay: 164.8,
      load_by_default: true,
      show_opname: false,
      otp_send_to: "",
    },
    {
      username: "mary@pegasystems.com",
      password: "rules",
      img: "avatar-2.jpg",
      company_name: "",
      name: "Mary Taylor",
      accountID: "",
      contactID: "",
      customerID: "",
      extraparam: "",
      dmm_context_data: "",
      pega_userid: "mtaylor",
      pega_pwd: "rules",
      bill_pay: 164.8,
      load_by_default: false,
      show_opname: false,
      otp_send_to: "",
    },
  ],
  pega_chat: {
    WCBConfigName: "",
    WebChatBotID: "",
    ApplicationName: "",
    MashupURL: "",
    ShowAsButton: true,
    EnableProActiveNotification: false,
    ResetLogout: false,
    ProActiveNotificationDismissTime: "",
    CoBrowseServerURL: "",
    CoBrowseToken: "",
    UseLegacyWebChat: false,
    DMMURL: "",
    DMMID: "pega-wm-chat",
    DMMSecret: "",
    DMMPrivateURL:
      "https://ksxyk0i2hb.execute-api.us-east-1.amazonaws.com/Prod/private-data",
  },
  pega_marketing: {
    Host: "",
    Port: "",
    channel: "Web",
    requestTimeout: 10000,
    replaceHomePageHeader: false,
    showAIOverlay: false,
    enableRTS: false,
    enableClickStream: false,
    enableMergeAccount: false,
    useCaptureByChannel: true,
    apiLevel: "V2",
    contextName: "Customer",
    showLoadingIndicator: false,
    appID: '',
    homePage: {
      containerName: "TopOffers",
      placement: "Hero,Tile,Tile,Tile",
      clickaction: "Mashup",
      attributes: '',
    },
    accountPage: {
      containerName: "TopOffers",
      placement: "Tile",
      clickaction: "Mashup",
      attributes: '',
      showSingleOffer: false,
    },
    phonePage: {
      containerName: "TopOffers",
      placement: "Tile",
      clickaction: "Mashup",
      attributes: '',
    },
    offerPage: {
      containerName: "TopOffers",
      placement: "Hero,Tile,Tile,Tile",
      clickaction: "Mashup",
      attributes: '',
    },
    extraOfferPages: [
      {
        containerName: "TopOffers",
        placement: "Hero,Tile,Tile,Tile",
        clickaction: "Mashup",
        attributes: '',
      },
      {
        containerName: "TopOffers",
        placement: "Hero,Tile,Tile,Tile",
        clickaction: "Mashup",
        attributes: '',
      },
      {
        containerName: "TopOffers",
        placement: "Hero,Tile,Tile,Tile",
        clickaction: "Mashup",
        attributes: '',
      },
      {
        containerName: "TopOffers",
        placement: "Hero,Tile,Tile,Tile",
        clickaction: "Mashup",
        attributes: '',
      },
    ],
  },
};
