// ./deskStructure.js
import { RateseIcon, MembershipIcon, NewsIcon, NoticeIcon, EventIcon, HotDogIcon } from "./icons/icons";
import { Utensils, Sandwich, Salad, BottleWine } from 'lucide-react';

export const deskStructure = (S) =>
  S.list()
    .title('Website')
    .id('website')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['rates', 'ticker', 'events', 'memberships', 'menuSection'].includes(listItem.getId()),
      ),

      S.listItem()
        .icon(EventIcon)
        .title('Events')
        .child(S.documentTypeList('events').title('Events')),
      // S.listItem()
      //   .icon(NewsIcon)
      //   .title('News')
      //   .child(S.documentTypeList('news').title('News Items')),
      // ⬇⬇⬇ singlet structure ⬇⬇⬇
      // S.listItem()
      //   .icon(RateseIcon)
      //   .title('Greens Fees')
      //   .child(S.document().schemaType('rates').documentId('rates').title('Greens Fees')),
      S.listItem()
        .icon(MembershipIcon)
        .title('Memberships')
        .child(S.document().schemaType('memberships').documentId('memberships').title('Memberships')),
      S.listItem()
        .title('Menu')
        .icon(Utensils)
        .child(
          S.list()
            .title('Menu')
            .items([
              S.listItem()
                .title('Entrées')
                .icon(Sandwich)
                .child(S.document().schemaType('menuSection').documentId('menu-entrees').title('Entrées')),
              S.listItem()
                .title('Quick Bites')
                .icon(HotDogIcon)
                .child(S.document().schemaType('menuSection').documentId('menu-quick-bites').title('Quick Bites')),
              S.listItem()
                .title('Grab and Go')
                .icon(Salad)
                .child(S.document().schemaType('menuSection').documentId('menu-grab-and-go').title('Grab and Go')),
              S.listItem()
                .title('Drinks')
                .icon(BottleWine)
                .child(S.document().schemaType('menuSection').documentId('menu-drinks').title('Drinks')),
            ]),
        ),
      S.divider(),
      S.listItem()
        .icon(NoticeIcon)
        .title('Notices')
        .child(S.document().schemaType('ticker').documentId('ticker').title('Notices')),
    ]);
