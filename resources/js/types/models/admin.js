import { adminPermissions } from "@js/services/permissions";
export class AdminRole {
    static select_helper() {
        return {
            option: {
                value: 'id', label: 'title'
            },
        };
    }
    static allRoles = [
        {
            'name': adminPermissions.zones, 'value': 'zones'
        }, {
            'name': adminPermissions.shop_plans, 'value': 'shop_plans'
        }, {
            'name': adminPermissions.sellers, 'value': 'sellers'
        }, {
            'name': adminPermissions.customers, 'value': 'customers'
        }, {
            'name': adminPermissions.home_layouts, 'value': 'home_layouts'
        }, {
            'name': adminPermissions.subscribers, 'value': 'subscribers'
        }, {
            'name': adminPermissions.home_banners, 'value': 'home_banners'
        }, {
            'name': adminPermissions.business_settings, 'value': 'business_settings'
        }, {
            'name': adminPermissions.modules, 'value': 'modules'
        }, {
            'name': adminPermissions.file_managers, 'value': 'file_managers'
        }, {
            'name': adminPermissions.units, 'value': 'units'
        }, {
            'name': adminPermissions.products, 'value': 'products'
        }, {
            'name': adminPermissions.shops, 'value': 'shops'
        }, {
            'name': adminPermissions.delivery_boys, 'value': 'delivery boys'
        }, {
            'name': adminPermissions.orders, 'value': 'orders'
        }, {
            'name': adminPermissions.pos, 'value': 'pos'
        }, {
            'name': adminPermissions.addons, 'value': 'addons'
        }, {
            'name': adminPermissions.revenues, 'value': 'revenues'
        }, {
            'name': adminPermissions.reports, 'value': 'reports'
        }, {
            'name': adminPermissions.employees, 'value': 'employees'
        }, {
            'name': adminPermissions.dashboard, 'value': 'dashboard'
        }, {
            'name': adminPermissions.categories, 'value': 'categories'
        }, {
            'name': adminPermissions.roles, 'value': 'roles'
        },
    ];
    static _getSelectableRoles = AdminRole.allRoles.map(function (role) {
        return {
            ...role, 'active': false
        };
    });
    static getSelectableRoles(selectedPermissions) {
        let permissions = JSON.parse(JSON.stringify(this._getSelectableRoles));
        for (const permission of permissions) {
            for (const selectedPermission of selectedPermissions) {
                if (permission.value === selectedPermission) {
                    permission.active = true;
                    break;
                }
            }
        }
        return permissions;
    }
}
