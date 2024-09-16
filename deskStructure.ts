
// ICONS
import {
    MdHome,
    MdWork,
    MdImportContacts,
    MdShoppingCart,
    MdMms,
    MdFlare,
    MdList
} from "react-icons/md"

export default (S: any) =>
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
            S.divider(),
            S.listItem()
                .title('Bureau')
                .icon(MdWork)
                .child(
                    S.documentList()
                        .title('Bureau articles')
                        .showIcons(true)
                        .filter('taxonomy.category == "bureau"')
                    // .defaultOrdering([{ field: 'publicationDate', direction: 'desc' }])

                ),
            S.divider(),
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
                .title("Banners")
                .icon(MdMms)
                .child(
                    S.documentList()
                        .title('Stockists')
                        .filter('_type == $type')
                        .params({ type: 'banner' })
                ),
            S.divider(),
            S.listItem()
                .title("Product list")
                .icon(MdList)
                .child(
                    S.editor()
                        .id('product-list')
                        .schemaType("productList")
                        .documentId("product-list")
                ),
            S.listItem()
                .title('Products')
                .icon(MdShoppingCart)
                .child(
                    S.documentList()
                        .title('Products')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'product' })
                ),
        ]);