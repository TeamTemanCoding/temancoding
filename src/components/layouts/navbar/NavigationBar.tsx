import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Button,
    Link,
} from "@heroui/react";
import useScroll from "~/hooks/useScroll";
import Image from "next/image";
import CompSelect from "~/components/ui/CompSelect";

interface MenuItem {
    name: string;
    href: string;
}

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { isScroll } = useScroll();

    const menuItems: MenuItem[] = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/about" },
        { name: "Benefit", href: "/#benefits" },
        { name: "Pricing", href: "/#pricing" },
    ];

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`bg-transparent fixed w-screen px-4 sm:px-24 z-50 transition-all ease-in-out duration-300- ${isScroll ? "sm:py-3 " : "sm:py-5"} ${isMenuOpen && 'bg-[#0A0628]/90 backdrop-blur-md'}`}
            isBlurred={isScroll}
        >
            <NavbarContent>
                <NavbarBrand>
                    <Image src="/images/logo.svg" alt="Logo" width={119} height={119} draggable={false} className="w-[100px] h-[100px] sm:w-[119px] sm:h-[119px]" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        <Link color="foreground" href={item.href} className="text-white text-md">
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden sm:block">
                    <CompSelect item={["English", "Indonesia"]} defaultSelected={["english"]} />
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white"
                />

                <NavbarItem className="hidden sm:flex">
                    <Link href="/sign-in" className="w-full">
                        <Button
                            variant="solid"
                            className="w-full bg-gradient-to-r from-[#36D1DC] via-[#2785DE] to-[#1F5BDF] text-white rounded-[6px] hover:opacity-100"
                        >
                            Get Started
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* MOBILE MENU */}
            <NavbarMenu className="bg-[#0A0628]/90 backdrop-blur-md w-full">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link className="w-full text-white" href={item.href} size="lg" onPress={() => setIsMenuOpen(false)} >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <div className="mt-3">
                    <NavbarMenuItem className="block sm:hidden w-full">
                        <CompSelect item={["English", "Indonesia"]} defaultSelected={["english"]} />
                    </NavbarMenuItem>
                    <div className="px-4 mt-4 sm:hidden">
                        <Link href="/sign-in" className="w-full">
                            <Button
                                variant="solid"
                                className="w-full bg-gradient-to-r from-[#36D1DC] via-[#2785DE] to-[#1F5BDF] text-white rounded-[6px] hover:opacity-100"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </NavbarMenu>
        </Navbar>
    );
}
