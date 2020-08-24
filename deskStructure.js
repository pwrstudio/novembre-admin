import S from "@sanity/desk-tool/structure-builder";
import Home from "react-icons/lib/md/home"
import Work from "react-icons/lib/md/work"
import ImportContacts from "react-icons/lib/md/import-contacts"
import MyLocation from "react-icons/lib/md/my-location"
import ShoppingCart from "react-icons/lib/md/shopping-cart"

import MMS from "react-icons/lib/md/mms"


export default () =>
    S.list()
        .title("novembre.global")
        .items([
            S.listItem()
                .title("About & contact")
                .icon(Home)
                .child(
                    S.editor()
                        .id('config')
                        .schemaType("meta")
                        .documentId("global-config")
                ),
            S.divider(),
            S.listItem()
                .title('Magazine')
                .icon(ImportContacts)
                .child(
                    S.documentList()
                        .title('Magazine articles')
                        .showIcons(true)
                        .filter('taxonomy.category == "magazine"')
                        .defaultOrdering([{ field: 'publicationDate', direction: 'desc' }])

                ),
            S.listItem()
                .title('Bureau')
                .icon(Work)
                .child(
                    S.documentList()
                        .title('Bureau articles')
                        .showIcons(true)
                        .filter('taxonomy.category == "bureau"')
                        .defaultOrdering([{ field: 'publicationDate', direction: 'desc' }])

                ),
            S.listItem()
                .title('Shop')
                .icon(ShoppingCart)
                .child(
                    S.documentList()
                        .title('Products')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'product' })

                ),
            S.divider(),
            S.listItem()
                .title('Stockists')
                .icon(MyLocation)
                .child(
                    S.documentList()
                        .title('Stockists')
                        .filter('_type == $type')
                        .params({ type: 'stockist' })
                ),
            S.divider(),
            S.listItem()
                .title("Banners")
                .icon(MMS)
                .child(
                    S.documentList()
                        .title('Stockists')
                        .filter('_type == $type')
                        .params({ type: 'banner' })
                ),
            // ...S.documentTypeListItems()
        ]);