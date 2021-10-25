import DashboardActiveIcon from '../assets/icons/donut_small_active.svg'
import DatacenterIconActive from '../assets/icons/network_check_active.svg'
import ShopIconActive from '../assets/icons/shopping_cart_active.svg'
import AccountIconActive from '../assets/icons/account_circle_active.svg'
import AdminIconActive from '../assets/icons/admin_panel_settings_active.svg'

import DashboardIcon from '../assets/icons/donut_small.svg'
import DatacenterIcon from '../assets/icons/network_check.svg'
import ShopIcon from '../assets/icons/shopping_cart.svg'
import AccountIcon from '../assets/icons/account_circle.svg'
import AdminIcon from '../assets/icons/admin_panel_settings.svg'

type RouteItem = {
    title: string,
    link: string,
    icon: string,
    activeIcon: string,
    roles?: string[],
    prefix: string
}

const routes: RouteItem[] = [
    {
        title: "Dashboard",
        link: "/",
        activeIcon: DashboardActiveIcon,
        icon: DashboardIcon,
        prefix: "dashboard"
    },
    {
        title: "Datacenter Proxies",
        link: "/",
        activeIcon: DatacenterIconActive,
        icon: DatacenterIcon,
        prefix: "data_center_proxies"
    },
    {
        title: "Shop",
        link: "/",
        activeIcon: ShopIconActive,
        icon: ShopIcon,
        prefix: "shop"
    },
    {
        title: "My account",
        link: "/",
        activeIcon: AccountIconActive,
        icon: AccountIcon,
        prefix: "my_account"
    },
    {
        title: "Admin",
        link: "/",
        activeIcon: AdminIconActive,
        icon: AdminIcon,
        prefix: "admin"
    },
    {
        title: "Datacenter Orders",
        link: "/",
        activeIcon: DatacenterIconActive,
        icon: DatacenterIcon,
        prefix: "datacenter_orders"
    },
    {
        title: "FAQ",
        link: "/",
        activeIcon: DatacenterIconActive,
        icon: DatacenterIcon,
        prefix: "faq"
    },
]


export default routes

