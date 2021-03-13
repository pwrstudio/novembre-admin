import S from "@sanity/desk-tool/structure-builder";

// ICONS
import {
    MdHome,
    MdWork,
    MdImportContacts,
    MdShoppingCart,
    MdMms,
    MdMyLocation,
    MdFlare
  } from "react-icons/md"


export default () =>
    S.list()
        .title("novembre.global")
        .items([
            S.listItem()
                .title("About & contact")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id('config')
                        .schemaType("meta")
                        .documentId("global-config")
                ),
            S.divider(),
            S.listItem()
                .title('Magazine')
                .icon(MdImportContacts)
                .child(
                    S.documentList()
                        .title('Magazine articles')
                        .showIcons(true)
                        .filter('taxonomy.category == "magazine"')
                        .defaultOrdering([{ field: 'publicationDate', direction: 'desc' }])

                ),
            S.listItem()
                .title('Bureau')
                .icon(MdWork)
                .child(
                    S.documentList()
                        .title('Bureau articles')
                        .showIcons(true)
                        .filter('taxonomy.category == "bureau"')
                        .defaultOrdering([{ field: 'publicationDate', direction: 'desc' }])

                ),
            S.listItem()
                .title('Shop')
                .icon(MdShoppingCart)
                .child(
                    S.documentList()
                        .title('Products')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'product' })
                ),
            S.listItem()
                .title('Satellites')
                .icon(MdFlare)
                .child(
                    S.documentList()
                        .title('Satellite sites')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'satelliteSite' })
                ),
            S.divider(),
            S.listItem()
                .title('Stockists')
                .icon(MdMyLocation)
                .child(
                    S.documentList()
                        .title('Stockists')
                        .filter('_type == $type')
                        .params({ type: 'stockist' })
                ),
            S.divider(),
            S.listItem()
                .title("Banners")
                .icon(MdMms)
                .child(
                    S.documentList()
                        .title('Stockists')
                        .filter('_type == $type')
                        .params({ type: 'banner' })
                ),
            // ...S.documentTypeListItems()
        ]);