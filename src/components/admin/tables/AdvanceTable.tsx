import React, { useMemo, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { CSVLink } from "react-csv";

interface Order {
    id: number;
    user: {
        image: string;
        name: string;
        role: string;
    };
    projectName: string;
    team: {
        images: string[];
    };
    status: string;
    budget: string;
}

const tableData: Order[] = [
    {
        id: 1,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
            role: "Web Designer",
        },
        projectName: "Agency Website",
        team: {
            images: [
                "/images/user/user-22.jpg",
                "/images/user/user-23.jpg",
                "/images/user/user-24.jpg",
            ],
        },
        budget: "3.9K",
        status: "Active",
    },
    {
        id: 2,
        user: {
            image: "/images/user/user-18.jpg",
            name: "Kaiya George",
            role: "Project Manager",
        },
        projectName: "Technology",
        team: {
            images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
        },
        budget: "24.9K",
        status: "Pending",
    },
    {
        id: 3,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Zain Geidt",
            role: "Content Writing",
        },
        projectName: "Blog Writing",
        team: {
            images: ["/images/user/user-27.jpg"],
        },
        budget: "12.7K",
        status: "Active",
    },
    {
        id: 4,
        user: {
            image: "/images/user/user-20.jpg",
            name: "Abram Schleifer",
            role: "Digital Marketer",
        },
        projectName: "Social Media",
        team: {
            images: [
                "/images/user/user-28.jpg",
                "/images/user/user-29.jpg",
                "/images/user/user-30.jpg",
            ],
        },
        budget: "2.8K",
        status: "Cancel",
    },
    {
        id: 5,
        user: {
            image: "/images/user/user-21.jpg",
            name: "Carla George",
            role: "Front-end Developer",
        },
        projectName: "Website",
        team: {
            images: [
                "/images/user/user-31.jpg",
                "/images/user/user-32.jpg",
                "/images/user/user-33.jpg",
            ],
        },
        budget: "4.5K",
        status: "Active",
    },
];

export default function BasicTableOne() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<keyof Order | null>(null);
    const [sortAsc, setSortAsc] = useState(true);

    const filteredData = useMemo(() => {
        let data = [...tableData];
        if (search) {
            data = data.filter((order) =>
                order.user.name.toLowerCase().includes(search.toLowerCase()) ||
                order.projectName.toLowerCase().includes(search.toLowerCase()) ||
                order.status.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (sortBy) {
            data.sort((a, b) => {
                const valA = a[sortBy] as string;
                const valB = b[sortBy] as string;
                return sortAsc
                    ? valA.localeCompare(valB)
                    : valB.localeCompare(valA);
            });
        }
        return data;
    }, [search, sortBy, sortAsc]);

    const handleSort = (field: keyof Order) => {
        if (sortBy === field) {
            setSortAsc(!sortAsc);
        } else {
            setSortBy(field);
            setSortAsc(true);
        }
    };

    const exportData = filteredData.map((order) => ({
        Name: order.user.name,
        Role: order.user.role,
        "Project Name": order.projectName,
        Status: order.status,
        Budget: order.budget,
    }));

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="flex justify-between items-center p-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded-md text-sm"
                />
                <CSVLink
                    data={exportData}
                    filename="table-data.csv"
                    className="px-3 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                >
                    Export to Excel
                </CSVLink>
            </div>
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <Table>
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader onClick={() => handleSort("user")} className="cursor-pointer px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">User</TableCell>
                                <TableCell isHeader onClick={() => handleSort("projectName")} className="cursor-pointer px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Project Name</TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Team</TableCell>
                                <TableCell isHeader onClick={() => handleSort("status")} className="cursor-pointer px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Status</TableCell>
                                <TableCell isHeader onClick={() => handleSort("budget")} className="cursor-pointer px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Budget</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {filteredData.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image width={40} height={40} src={order.user.image} alt={order.user.name} />
                                            </div>
                                            <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">{order.user.name}</span>
                                                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">{order.user.role}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{order.projectName}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <div className="flex -space-x-2">
                                            {order.team.images.map((teamImage, index) => (
                                                <div key={index} className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                                    <Image width={24} height={24} src={teamImage} alt={`Team member ${index + 1}`} className="w-full" />
                                                </div>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <Badge size="sm" color={order.status === "Active" ? "success" : order.status === "Pending" ? "warning" : "error"}>{order.status}</Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">{order.budget}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
