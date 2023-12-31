<template>
    <div class="min-h-screen bg-white">
        <div class="flex bg-white">
            <div
                class="bg-blue-800 min-h-screen p-5 pt-8 relative duration-300"
                :class="isOpen ? 'w-72 mr-2' : 'w-20'"
            >
                <FontAwesomeIcon
                    class="bg-blue-800 text-white text-3xl rounded-full absolute -right-3 top-20 border cursor-pointer"
                    icon="fa-solid fa-circle-arrow-left"
                    :class="!isOpen && 'rotate-180'"
                    @click="setIsOpenStatus"
                />
                <div class="inline-flex">
                    <a :href="route('home')" >
                        <img
                            :class="isOpen && 'object-contain h-32 w-96'"
                            src="../../../public/logo.png"
                        />
                    </a>
                </div>
                <div
                    class="flex items-center justify-center rounded-md py-2 text-gray-300 text-lg block font-bold"
                >
                    <span>Hello, {{ $page.props.auth.user.name }} !</span>
                </div>
                <ul v-for="(menu, index) in menuList">
                    <li
                        v-if="menu.can"
                        :key="index"
                        class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md"
                        :class="menu.spacing ? 'mt-9' : 'mt-2'"
                        @click="menuClicked(menu.route, menu.isLogout)"
                    >
                        <span class="text-2xl block float-left mr-2">
                            <FontAwesomeIcon :icon="menu.icon"
                        /></span>
                        <span
                            class="text-base font-medium flex-1 duration-200"
                            :class="!isOpen && 'hidden'"
                            >{{ menu.title }}</span
                        >
                    </li>
                </ul>
            </div>
            <main class="flex-auto">
                <slot />
            </main>
        </div>
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";

export default {
    data() {
        return {
            isOpen: true,
            menuList: [],
            logo: null,
        };
    },
    methods: {
        setIsOpenStatus() {
            this.isOpen = !this.isOpen;
        },
        menuClicked(route, isLogout) {
            if (isLogout) Inertia.post(route);
            else Inertia.visit(route);
        },
    },
    beforeCreate() {
        axios.get(route("menusidebar.getPermissions")).then((res) => {
            this.menuList = [
                {
                    title: "Home",
                    icon: "fa-solid fa-house",
                    route: route("home"),
                    can: true,
                },
                {
                    title: "Dashboard",
                    icon: "fa-solid fa-table-columns",
                    route: route("dashboard"),
                    can: true,
                },
                {
                    title: "Posts",
                    icon: "fa-solid fa-mail-bulk",
                    route: route("post.index"),
                    can: res.data.can.posts,
                },
                {
                    title: "Categories",
                    icon: "fa-solid fa-layer-group",
                    route: route("category.index"),
                    can: res.data.can.categories,
                },
                {
                    title: "Mentors",
                    icon: "fa-solid fa-person-chalkboard",
                    route: route("mentor.index"),
                    can: res.data.can.mentors,
                },
                {
                    title: "Your Mentor Profile",
                    icon: "fa-solid fa-person-chalkboard",
                    route: route("my-mentor-profile.index"),
                    can: !res.data.can.mentors,
                },
                {
                    title: "Appointments",
                    icon: "fa-solid fa-calendar-check",
                    route: route("appointment.index"),
                    can: res.data.can.appointments,
                },
                {
                    title: "My Appointments",
                    icon: "fa-solid fa-calendar-check",
                    route: route("my-appointment.index"),
                    can: !res.data.can.appointments,
                },
                {
                    title: "Users",
                    icon: "fa-solid fa-users",
                    route: route("user.index"),
                    can: res.data.can.users,
                },
                {
                    title: "Permissions",
                    icon: "fa-solid fa-universal-access",
                    route: route("permission.index"),
                    can: res.data.can.permissions,
                },
                {
                    title: "Roles",
                    icon: "fa-solid fa-people-roof",
                    route: route("role.index"),
                    can: res.data.can.roles,
                },
                {
                    title: "Join Our Networks",
                    icon: "fa-solid fa-network-wired",
                    route: route("join-our-networks.index"),
                    can: res.data.can.join_our_networks,
                },
                {
                    title: "Page Settings",
                    icon: "fa-solid fa-gear",
                    route: route("page-settings.index"),
                    can: res.data.can.page_settings,
                },
                {
                    title: "My Profile",
                    icon: "fa-solid fa-user",
                    route: route("profile.edit"),
                    can: true,
                },
                {
                    title: "Logout",
                    icon: "fa-solid fa-sign-out",
                    route: route("logout"),
                    can: true,
                    isLogout: true,
                },
            ];
        });
    },
};
</script>
