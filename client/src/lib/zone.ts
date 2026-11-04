export function zoneLabel(zone: string): string {
  return zone === 'WG' ? 'WG 外籍' : `${zone}区`;
}
