const mapping: Record<string, string> = {
  campaigns: 'campaign',
  companies: 'company',
  complaints: 'complaint',
  'connection-options': 'connection_option',
  profiles: 'profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
