interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'App Administrator', 'Customer Support', 'Marketing Manager'],
  tenantName: 'Company',
  applicationName: 'Couple Dating',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage company registration on Social Connections app',
    'Manage team access to the application',
    "Manage the company's profile",
    'Manage list of employees using the app',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/280bae2d-5e62-45af-bdf9-9fb4758a3383',
};
