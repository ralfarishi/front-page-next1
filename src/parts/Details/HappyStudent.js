import React from "react";

import Star from "@/components/Star";

export default function HappyStudent({ data }) {
	return (
		<div className="mt-8">
			<Star value={data?.rating ?? 4} width={26} height={26}></Star>
			<p className="text-gray-600 mt-1">{data?.note ?? "Kelasnya bagus"}</p>
			<div className="flex items-center mt-4">
				<div className="rounded-full overflow-hidden">
					<img
						src={
							data?.users?.avatar ?? "https://placehold.co/400x300?text=User+1"
						}
						alt={data?.users?.name ?? "student's name"}
						className="object-cover w-14 h-14"
					/>
				</div>
				<div className="ml-4">
					<h2 className="text-lg text-gray-900">
						{data?.users?.name ?? "User 1"}
					</h2>
					<h3 className="text-sm text-gray-600">
						{data?.users?.role ?? "Backend Developer"}
					</h3>
				</div>
			</div>
		</div>
	);
}
