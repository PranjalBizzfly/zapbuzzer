/**
 * Old page URLs → new URLs that match each page's name. Permanent (308) redirects,
 * so existing links, bookmarks and search results keep working. Wired up in next.config.ts.
 */
export const legacyRedirects = [
  {
    "source": "/product",
    "destination": "/overview",
    "permanent": true
  },
  {
    "source": "/demo",
    "destination": "/book-a-demo",
    "permanent": true
  },
  {
    "source": "/solutions/pantry/catalog",
    "destination": "/solutions/pantry/pantry-catalog",
    "permanent": true
  },
  {
    "source": "/solutions/pantry/ordering-workflow",
    "destination": "/solutions/pantry/pantry-ordering-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/pantry/staff-management",
    "destination": "/solutions/pantry/pantry-staff-management",
    "permanent": true
  },
  {
    "source": "/solutions/pantry/request-tracking",
    "destination": "/solutions/pantry/pantry-request-tracking",
    "permanent": true
  },
  {
    "source": "/solutions/print-room/request-tracking",
    "destination": "/solutions/print-room/print-request-tracking",
    "permanent": true
  },
  {
    "source": "/solutions/print-room/staff-workflow",
    "destination": "/solutions/print-room/print-room-staff-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/print-room/sla",
    "destination": "/solutions/print-room/print-sla-management",
    "permanent": true
  },
  {
    "source": "/solutions/print-room/analytics",
    "destination": "/solutions/print-room/print-analytics",
    "permanent": true
  },
  {
    "source": "/solutions/it-support/request-management",
    "destination": "/solutions/it-support/it-request-management",
    "permanent": true
  },
  {
    "source": "/solutions/it-support/meeting-room-support",
    "destination": "/solutions/it-support/meeting-room-it-support",
    "permanent": true
  },
  {
    "source": "/solutions/it-support/software-requests",
    "destination": "/solutions/it-support/software-support-requests",
    "permanent": true
  },
  {
    "source": "/solutions/it-support/ticket-routing",
    "destination": "/solutions/it-support/it-ticket-routing",
    "permanent": true
  },
  {
    "source": "/solutions/it-support/sla",
    "destination": "/solutions/it-support/it-sla-management",
    "permanent": true
  },
  {
    "source": "/solutions/it-support/analytics",
    "destination": "/solutions/it-support/it-support-analytics",
    "permanent": true
  },
  {
    "source": "/solutions/facilities/requests",
    "destination": "/solutions/facilities/facilities-requests",
    "permanent": true
  },
  {
    "source": "/solutions/facilities/office-equipment",
    "destination": "/solutions/facilities/office-equipment-requests",
    "permanent": true
  },
  {
    "source": "/solutions/facilities/routing",
    "destination": "/solutions/facilities/facilities-routing",
    "permanent": true
  },
  {
    "source": "/solutions/facilities/escalation",
    "destination": "/solutions/facilities/facilities-escalation",
    "permanent": true
  },
  {
    "source": "/solutions/facilities/sla",
    "destination": "/solutions/facilities/facilities-sla",
    "permanent": true
  },
  {
    "source": "/solutions/facilities/analytics",
    "destination": "/solutions/facilities/facilities-analytics",
    "permanent": true
  },
  {
    "source": "/solutions/courier",
    "destination": "/solutions/courier-and-reception",
    "permanent": true
  },
  {
    "source": "/solutions/courier/pickup",
    "destination": "/solutions/courier-and-reception/courier-pickup",
    "permanent": true
  },
  {
    "source": "/solutions/courier/mailroom",
    "destination": "/solutions/courier-and-reception/mailroom-requests",
    "permanent": true
  },
  {
    "source": "/solutions/courier/reception",
    "destination": "/solutions/courier-and-reception/reception-requests",
    "permanent": true
  },
  {
    "source": "/solutions/courier/delivery-requests",
    "destination": "/solutions/courier-and-reception/delivery-requests",
    "permanent": true
  },
  {
    "source": "/solutions/courier/incoming-workflow",
    "destination": "/solutions/courier-and-reception/incoming-courier-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/courier/outgoing-workflow",
    "destination": "/solutions/courier-and-reception/outgoing-courier-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/courier/tracking",
    "destination": "/solutions/courier-and-reception/courier-tracking",
    "permanent": true
  },
  {
    "source": "/solutions/courier/reception-workflow",
    "destination": "/solutions/courier-and-reception/reception-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/courier/mailroom-analytics",
    "destination": "/solutions/courier-and-reception/mailroom-analytics",
    "permanent": true
  },
  {
    "source": "/notifications/multi-channel",
    "destination": "/notifications/multi-channel-notifications",
    "permanent": true
  },
  {
    "source": "/notifications/telegram",
    "destination": "/notifications/telegram-integration",
    "permanent": true
  },
  {
    "source": "/notifications/whatsapp",
    "destination": "/notifications/whatsapp-notifications",
    "permanent": true
  },
  {
    "source": "/notifications/email",
    "destination": "/notifications/email-notifications",
    "permanent": true
  },
  {
    "source": "/notifications/push",
    "destination": "/notifications/mobile-push-notifications",
    "permanent": true
  },
  {
    "source": "/notifications/routing",
    "destination": "/notifications/notification-routing",
    "permanent": true
  },
  {
    "source": "/notifications/escalation",
    "destination": "/notifications/notification-escalation",
    "permanent": true
  },
  {
    "source": "/notifications/preferences",
    "destination": "/notifications/notification-preferences",
    "permanent": true
  },
  {
    "source": "/notifications/workflow",
    "destination": "/notifications/notification-workflow",
    "permanent": true
  },
  {
    "source": "/sla",
    "destination": "/sla-and-escalation",
    "permanent": true
  },
  {
    "source": "/sla/timers",
    "destination": "/sla-and-escalation/sla-timers",
    "permanent": true
  },
  {
    "source": "/sla/tracking",
    "destination": "/sla-and-escalation/sla-tracking",
    "permanent": true
  },
  {
    "source": "/sla/breach-detection",
    "destination": "/sla-and-escalation/sla-breach-detection",
    "permanent": true
  },
  {
    "source": "/sla/automatic-escalation",
    "destination": "/sla-and-escalation/automatic-escalation",
    "permanent": true
  },
  {
    "source": "/sla/manager-escalation",
    "destination": "/sla-and-escalation/manager-escalation",
    "permanent": true
  },
  {
    "source": "/sla/escalation-chains",
    "destination": "/sla-and-escalation/escalation-chains",
    "permanent": true
  },
  {
    "source": "/sla/overdue-requests",
    "destination": "/sla-and-escalation/overdue-requests",
    "permanent": true
  },
  {
    "source": "/sla/reporting",
    "destination": "/sla-and-escalation/sla-reporting",
    "permanent": true
  },
  {
    "source": "/sla/analytics",
    "destination": "/sla-and-escalation/sla-analytics",
    "permanent": true
  },
  {
    "source": "/analytics/requests",
    "destination": "/analytics/request-analytics",
    "permanent": true
  },
  {
    "source": "/analytics/staff",
    "destination": "/analytics/staff-analytics",
    "permanent": true
  },
  {
    "source": "/analytics/response-time",
    "destination": "/analytics/response-time-analytics",
    "permanent": true
  },
  {
    "source": "/analytics/acceptance-time",
    "destination": "/analytics/acceptance-time-analytics",
    "permanent": true
  },
  {
    "source": "/analytics/delivery-time",
    "destination": "/analytics/delivery-time-analytics",
    "permanent": true
  },
  {
    "source": "/analytics/ratings",
    "destination": "/analytics/rating-analytics",
    "permanent": true
  },
  {
    "source": "/analytics/office-activity",
    "destination": "/analytics/office-activity-analytics",
    "permanent": true
  },
  {
    "source": "/admin",
    "destination": "/administration",
    "permanent": true
  },
  {
    "source": "/admin/roles-and-permissions",
    "destination": "/administration/roles-and-permissions",
    "permanent": true
  },
  {
    "source": "/admin/owner-dashboard",
    "destination": "/administration/owner-dashboard",
    "permanent": true
  },
  {
    "source": "/admin/staff-dashboard",
    "destination": "/administration/staff-dashboard",
    "permanent": true
  },
  {
    "source": "/admin/employee-dashboard",
    "destination": "/administration/employee-dashboard",
    "permanent": true
  },
  {
    "source": "/admin/manager-dashboard",
    "destination": "/administration/manager-dashboard",
    "permanent": true
  },
  {
    "source": "/admin/team-management",
    "destination": "/administration/team-management",
    "permanent": true
  },
  {
    "source": "/admin/staff-assignment",
    "destination": "/administration/staff-assignment",
    "permanent": true
  },
  {
    "source": "/admin/audit-logs",
    "destination": "/administration/audit-logs",
    "permanent": true
  },
  {
    "source": "/admin/spend-visibility",
    "destination": "/administration/spend-visibility",
    "permanent": true
  },
  {
    "source": "/mobile-app/android",
    "destination": "/mobile-app/android-app",
    "permanent": true
  },
  {
    "source": "/mobile-app/requests",
    "destination": "/mobile-app/mobile-requests",
    "permanent": true
  },
  {
    "source": "/mobile-app/notifications",
    "destination": "/mobile-app/mobile-notifications",
    "permanent": true
  },
  {
    "source": "/mobile-app/staff-assignment",
    "destination": "/mobile-app/mobile-staff-assignment",
    "permanent": true
  },
  {
    "source": "/mobile-app/request-tracking",
    "destination": "/mobile-app/mobile-request-tracking",
    "permanent": true
  },
  {
    "source": "/mobile-app/request-acceptance",
    "destination": "/mobile-app/mobile-request-acceptance",
    "permanent": true
  },
  {
    "source": "/mobile-app/delivery-tracking",
    "destination": "/mobile-app/mobile-delivery-tracking",
    "permanent": true
  },
  {
    "source": "/mobile-app/ratings",
    "destination": "/mobile-app/mobile-ratings",
    "permanent": true
  },
  {
    "source": "/mobile-app/staff-workflow",
    "destination": "/mobile-app/mobile-staff-workflow",
    "permanent": true
  },
  {
    "source": "/mobile-app/office-management",
    "destination": "/mobile-app/mobile-office-management",
    "permanent": true
  },
  {
    "source": "/enterprise/rollout",
    "destination": "/enterprise/enterprise-rollout",
    "permanent": true
  },
  {
    "source": "/enterprise/administration",
    "destination": "/enterprise/enterprise-administration",
    "permanent": true
  },
  {
    "source": "/enterprise/analytics",
    "destination": "/enterprise/enterprise-analytics",
    "permanent": true
  },
  {
    "source": "/enterprise/user-management",
    "destination": "/enterprise/enterprise-user-management",
    "permanent": true
  },
  {
    "source": "/enterprise/permissions",
    "destination": "/enterprise/enterprise-permissions",
    "permanent": true
  },
  {
    "source": "/enterprise/audit-logs",
    "destination": "/enterprise/enterprise-audit-logs",
    "permanent": true
  },
  {
    "source": "/enterprise/reporting",
    "destination": "/enterprise/enterprise-reporting",
    "permanent": true
  },
  {
    "source": "/enterprise/support",
    "destination": "/enterprise/enterprise-support",
    "permanent": true
  },
  {
    "source": "/developers/api",
    "destination": "/developers/api-documentation",
    "permanent": true
  },
  {
    "source": "/developers/authentication",
    "destination": "/developers/api-authentication",
    "permanent": true
  },
  {
    "source": "/integrations/sso-saml",
    "destination": "/integrations/sso-and-saml",
    "permanent": true
  },
  {
    "source": "/use-cases/hr",
    "destination": "/use-cases/hr-team",
    "permanent": true
  },
  {
    "source": "/use-cases/reception",
    "destination": "/use-cases/reception-team",
    "permanent": true
  },
  {
    "source": "/use-cases/sales",
    "destination": "/use-cases/sales-team",
    "permanent": true
  },
  {
    "source": "/use-cases/operations",
    "destination": "/use-cases/operations-team",
    "permanent": true
  },
  {
    "source": "/use-cases/stop-office-chase-calls",
    "destination": "/use-cases/stop-chase-calls",
    "permanent": true
  },
  {
    "source": "/use-cases/pantry-operations",
    "destination": "/use-cases/better-pantry-operations",
    "permanent": true
  },
  {
    "source": "/use-cases/facilities-operations",
    "destination": "/use-cases/better-facilities-operations",
    "permanent": true
  },
  {
    "source": "/pricing/free",
    "destination": "/pricing/free-plan",
    "permanent": true
  },
  {
    "source": "/pricing/pro",
    "destination": "/pricing/pro-plan",
    "permanent": true
  },
  {
    "source": "/pricing/enterprise",
    "destination": "/pricing/enterprise-plan",
    "permanent": true
  },
  {
    "source": "/pricing/billing",
    "destination": "/pricing/billing-and-seats",
    "permanent": true
  },
  {
    "source": "/resources/faq",
    "destination": "/resource-hub/faq",
    "permanent": true
  },
  {
    "source": "/compare",
    "destination": "/feature-comparison",
    "permanent": true
  },
  {
    "source": "/compare/manual-requests",
    "destination": "/feature-comparison/vs-manual-requests",
    "permanent": true
  },
  {
    "source": "/compare/whatsapp",
    "destination": "/feature-comparison/vs-whatsapp",
    "permanent": true
  },
  {
    "source": "/compare/phone-calls",
    "destination": "/feature-comparison/vs-phone-calls",
    "permanent": true
  },
  {
    "source": "/compare/helpdesk",
    "destination": "/feature-comparison/vs-helpdesk",
    "permanent": true
  },
  {
    "source": "/customers",
    "destination": "/customer-stories",
    "permanent": true
  },
  {
    "source": "/product-overview",
    "destination": "/overview",
    "permanent": true
  },
  {
    "source": "/about",
    "destination": "/about-us",
    "permanent": true
  },
  {
    "source": "/contact",
    "destination": "/contact-us",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management",
    "destination": "/solutions/pantry",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/pantry-catalog",
    "destination": "/solutions/pantry/pantry-catalog",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/coffee-requests",
    "destination": "/solutions/pantry/coffee-requests",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/tea-requests",
    "destination": "/solutions/pantry/tea-requests",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/snacks-requests",
    "destination": "/solutions/pantry/snacks-requests",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/lunch-requests",
    "destination": "/solutions/pantry/lunch-requests",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/office-refreshments",
    "destination": "/solutions/pantry/office-refreshments",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/pantry-ordering-workflow",
    "destination": "/solutions/pantry/pantry-ordering-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/pantry-staff-management",
    "destination": "/solutions/pantry/pantry-staff-management",
    "permanent": true
  },
  {
    "source": "/solutions/pantry-management/pantry-request-tracking",
    "destination": "/solutions/pantry/pantry-request-tracking",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management",
    "destination": "/solutions/facilities",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/facilities-requests",
    "destination": "/solutions/facilities/facilities-requests",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/ac-requests",
    "destination": "/solutions/facilities/ac-requests",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/conference-room-issues",
    "destination": "/solutions/facilities/conference-room-issues",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/maintenance-requests",
    "destination": "/solutions/facilities/maintenance-requests",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/office-equipment-requests",
    "destination": "/solutions/facilities/office-equipment-requests",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/facilities-routing",
    "destination": "/solutions/facilities/facilities-routing",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/facilities-escalation",
    "destination": "/solutions/facilities/facilities-escalation",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/facilities-sla",
    "destination": "/solutions/facilities/facilities-sla",
    "permanent": true
  },
  {
    "source": "/solutions/facilities-management/facilities-analytics",
    "destination": "/solutions/facilities/facilities-analytics",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management",
    "destination": "/solutions/courier-and-reception",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/courier-pickup",
    "destination": "/solutions/courier-and-reception/courier-pickup",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/mailroom-requests",
    "destination": "/solutions/courier-and-reception/mailroom-requests",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/reception-requests",
    "destination": "/solutions/courier-and-reception/reception-requests",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/delivery-requests",
    "destination": "/solutions/courier-and-reception/delivery-requests",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/incoming-courier-workflow",
    "destination": "/solutions/courier-and-reception/incoming-courier-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/outgoing-courier-workflow",
    "destination": "/solutions/courier-and-reception/outgoing-courier-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/courier-tracking",
    "destination": "/solutions/courier-and-reception/courier-tracking",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/reception-workflow",
    "destination": "/solutions/courier-and-reception/reception-workflow",
    "permanent": true
  },
  {
    "source": "/solutions/courier-management/mailroom-analytics",
    "destination": "/solutions/courier-and-reception/mailroom-analytics",
    "permanent": true
  },
  {
    "source": "/notification-management",
    "destination": "/notifications",
    "permanent": true
  },
  {
    "source": "/notification-management/multi-channel-notifications",
    "destination": "/notifications/multi-channel-notifications",
    "permanent": true
  },
  {
    "source": "/notification-management/telegram-integration",
    "destination": "/notifications/telegram-integration",
    "permanent": true
  },
  {
    "source": "/notification-management/whatsapp-notifications",
    "destination": "/notifications/whatsapp-notifications",
    "permanent": true
  },
  {
    "source": "/notification-management/email-notifications",
    "destination": "/notifications/email-notifications",
    "permanent": true
  },
  {
    "source": "/notification-management/mobile-push-notifications",
    "destination": "/notifications/mobile-push-notifications",
    "permanent": true
  },
  {
    "source": "/notification-management/notification-routing",
    "destination": "/notifications/notification-routing",
    "permanent": true
  },
  {
    "source": "/notification-management/notification-escalation",
    "destination": "/notifications/notification-escalation",
    "permanent": true
  },
  {
    "source": "/notification-management/notification-preferences",
    "destination": "/notifications/notification-preferences",
    "permanent": true
  },
  {
    "source": "/notification-management/notification-workflow",
    "destination": "/notifications/notification-workflow",
    "permanent": true
  },
  {
    "source": "/sla-management",
    "destination": "/sla-and-escalation",
    "permanent": true
  },
  {
    "source": "/sla-management/sla-timers",
    "destination": "/sla-and-escalation/sla-timers",
    "permanent": true
  },
  {
    "source": "/sla-management/sla-tracking",
    "destination": "/sla-and-escalation/sla-tracking",
    "permanent": true
  },
  {
    "source": "/sla-management/sla-breach-detection",
    "destination": "/sla-and-escalation/sla-breach-detection",
    "permanent": true
  },
  {
    "source": "/sla-management/automatic-escalation",
    "destination": "/sla-and-escalation/automatic-escalation",
    "permanent": true
  },
  {
    "source": "/sla-management/manager-escalation",
    "destination": "/sla-and-escalation/manager-escalation",
    "permanent": true
  },
  {
    "source": "/sla-management/escalation-chains",
    "destination": "/sla-and-escalation/escalation-chains",
    "permanent": true
  },
  {
    "source": "/sla-management/overdue-requests",
    "destination": "/sla-and-escalation/overdue-requests",
    "permanent": true
  },
  {
    "source": "/sla-management/sla-reporting",
    "destination": "/sla-and-escalation/sla-reporting",
    "permanent": true
  },
  {
    "source": "/sla-management/sla-analytics",
    "destination": "/sla-and-escalation/sla-analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview",
    "destination": "/analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview/request-analytics",
    "destination": "/analytics/request-analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview/staff-analytics",
    "destination": "/analytics/staff-analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview/team-performance",
    "destination": "/analytics/team-performance",
    "permanent": true
  },
  {
    "source": "/analytics-overview/response-time-analytics",
    "destination": "/analytics/response-time-analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview/acceptance-time-analytics",
    "destination": "/analytics/acceptance-time-analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview/delivery-time-analytics",
    "destination": "/analytics/delivery-time-analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview/on-time-performance",
    "destination": "/analytics/on-time-performance",
    "permanent": true
  },
  {
    "source": "/analytics-overview/rating-analytics",
    "destination": "/analytics/rating-analytics",
    "permanent": true
  },
  {
    "source": "/analytics-overview/office-activity-analytics",
    "destination": "/analytics/office-activity-analytics",
    "permanent": true
  },
  {
    "source": "/admin-dashboard",
    "destination": "/administration",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/roles-and-permissions",
    "destination": "/administration/roles-and-permissions",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/owner-dashboard",
    "destination": "/administration/owner-dashboard",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/staff-dashboard",
    "destination": "/administration/staff-dashboard",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/employee-dashboard",
    "destination": "/administration/employee-dashboard",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/manager-dashboard",
    "destination": "/administration/manager-dashboard",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/team-management",
    "destination": "/administration/team-management",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/staff-assignment",
    "destination": "/administration/staff-assignment",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/audit-logs",
    "destination": "/administration/audit-logs",
    "permanent": true
  },
  {
    "source": "/admin-dashboard/spend-visibility",
    "destination": "/administration/spend-visibility",
    "permanent": true
  },
  {
    "source": "/enterprise/enterprise-security",
    "destination": "/enterprise/security",
    "permanent": true
  },
  {
    "source": "/developers/api-overview",
    "destination": "/developers/api-documentation",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/coffee-request",
    "destination": "/workflows/coffee-request",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/print-request",
    "destination": "/workflows/print-request",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/it-support",
    "destination": "/workflows/it-support",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/ac-issue",
    "destination": "/workflows/ac-issue",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/projector-request",
    "destination": "/workflows/projector-request",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/hdmi-request",
    "destination": "/workflows/hdmi-request",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/courier-pickup",
    "destination": "/workflows/courier-pickup",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/lunch-request",
    "destination": "/workflows/lunch-request",
    "permanent": true
  },
  {
    "source": "/office-service-workflow/emergency-summon",
    "destination": "/workflows/emergency-summon",
    "permanent": true
  },
  {
    "source": "/office-service-workflow",
    "destination": "/workflows",
    "permanent": true
  },
  {
    "source": "/resources",
    "destination": "/resource-hub",
    "permanent": true
  },
  {
    "source": "/resources/product-tour",
    "destination": "/resource-hub/product-tour",
    "permanent": true
  },
  {
    "source": "/resources/product-faq",
    "destination": "/resource-hub/faq",
    "permanent": true
  },
  {
    "source": "/feature-comparison/vs-traditional-helpdesk",
    "destination": "/feature-comparison/vs-helpdesk",
    "permanent": true
  },
  {
    "source": "/resources/office-efficiency-guide",
    "destination": "/resource-hub/office-efficiency-guide",
    "permanent": true
  },
  {
    "source": "/resources/internal-request-management-guide",
    "destination": "/resource-hub/internal-request-management-guide",
    "permanent": true
  },
  {
    "source": "/resources/workplace-operations-guide",
    "destination": "/resource-hub/workplace-operations-guide",
    "permanent": true
  },
  {
    "source": "/resources/sla-management-guide",
    "destination": "/resource-hub/sla-management-guide",
    "permanent": true
  },
  {
    "source": "/resources/office-automation-guide",
    "destination": "/resource-hub/office-automation-guide",
    "permanent": true
  },
  {
    "source": "/resources/glossary",
    "destination": "/resource-hub/glossary",
    "permanent": true
  },
  {
    "source": "/explore",
    "destination": "/explore-all-pages",
    "permanent": true
  },
  {
    "source": "/vendors",
    "destination": "/vendors-and-partners",
    "permanent": true
  }
];

/** Page path (no leading slash) → every path it had before URL renames. */
const previousPaths = new Map<string, string[]>();
for (const r of legacyRedirects) {
  const k = r.destination.slice(1);
  previousPaths.set(k, [...(previousPaths.get(k) ?? []), r.source.slice(1)]);
}

/** Looks up content keyed by a page's path, falling back to any of its pre-rename paths. */
export const byPath = <T,>(map: Record<string, T>, path: string): T | undefined =>
  map[path] ?? (previousPaths.get(path) ?? []).map((p) => map[p]).find((v) => v !== undefined);
