import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    rates: defineLocations({
      select: { title: 'title' },
      resolve: () => ({
        locations: [{ title: 'Greens Fees', href: '/greens-fees' }],
      }),
    }),
    memberships: defineLocations({
      select: { title: 'membershipsHeading' },
      resolve: () => ({
        locations: [{ title: 'Membership', href: '/membership' }],
      }),
    }),
  },
}