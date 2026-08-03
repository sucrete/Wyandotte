// ./deskStructure.js
import { RateseIcon, MembershipIcon, NewsIcon, NoticeIcon, EventIcon } from "./icons/icons";

export const deskStructure = (S) =>
  S.list()
    .title('Website')
    .id('website')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['rates', 'ticker', 'events', 'memberships'].includes(listItem.getId()),
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
      S.listItem()
        .icon(RateseIcon)
        .title('Greens Fees')
        .child(S.document().schemaType('rates').documentId('rates').title('Greens Fees')),
      S.listItem()
        .icon(MembershipIcon)
        .title('Memberships')
        .child(S.document().schemaType('memberships').documentId('memberships').title('Memberships')),
      S.divider(),
      S.listItem()
        .icon(NoticeIcon)
        .title('Notices')
        .child(S.document().schemaType('ticker').documentId('ticker').title('Notices')),
    ]);
