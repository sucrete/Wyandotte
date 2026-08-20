// ./deskStructure.js
import { RateseIcon, MembershipIcon, NewsIcon, NoticeIcon, EventIcon, HotDogIcon } from './icons/icons';
import { Utensils, Sandwich, Salad, BottleWine, Image as GalleryIcon } from 'lucide-react';
import { ThListIcon } from '@sanity/icons';
import { createBulkActionsTable } from 'sanity-plugin-bulk-actions-table';

export const deskStructure = (S, context) =>
  S.list()
    .title('Website')
    .id('website')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['rates', 'ticker', 'events', 'memberships', 'menuSection', 'gallery', 'media.tag'].includes(
            listItem.getId(),
          ),
      ),

      S.listItem()
        .id('events')
        .icon(EventIcon)
        .title('Events')
        .child(
          S.list()
            .title('Events')
            .items([
              S.listItem()
                .id('events-list')
                .icon(EventIcon)
                .title('Events')
                .child(S.documentTypeList('events').title('Events')),
              createBulkActionsTable({ type: 'events', S, context, title: 'Manage', icon: ThListIcon }),
            ]),
        ),

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
      S.listItem()
        .icon(GalleryIcon)
        .title('Gallery')
        .child(S.document().schemaType('gallery').documentId('gallery').title('Gallery')),
      S.divider(),
      S.listItem()
        .icon(NoticeIcon)
        .title('Notices')
        .child(S.document().schemaType('ticker').documentId('ticker').title('Notices')),
    ]);
