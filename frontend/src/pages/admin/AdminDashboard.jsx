import {
  LayoutDashboard,
  Users,
  CreditCard,
  Megaphone,
  Building2,
  HandHeart,
  BarChart3,
  Settings,
  CalendarDays,
  Download,
  Search,
  FileText,
  Wallet,
  CircleDollarSign,
  Clock3,
  Home,
  Calculator,
  Gift,
  UserRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Donors",
      icon: Users,
    },
    {
      name: "Payments",
      icon: CreditCard,
    },
    {
      name: "Campaigns",
      icon: Megaphone,
    },
    {
      name: "Orgs",
      icon: Building2,
    },
    {
      name: "Beneficiaries",
      icon: HandHeart,
    },
    {
      name: "Reports",
      icon: BarChart3,
    },
  ];

  const payments = [
    {
      ref: "#ZK-88210",
      donor: "Moussa Gueye",
      amount: "500,000 CFA",
      method: "Orange Money",
      status: "Success",
      date: "Oct 24, 2023",
      time: "14:20",
    },
    {
      ref: "#ZK-88211",
      donor: "Fatou Ndiaye",
      amount: "120,000 CFA",
      method: "Wave",
      status: "Success",
      date: "Oct 24, 2023",
      time: "13:45",
    },
    {
      ref: "#ZK-88212",
      donor: "Abdoulaye Diallo",
      amount: "2,500,000 CFA",
      method: "Bank Transfer",
      status: "Verifying",
      date: "Oct 24, 2023",
      time: "11:10",
    },
    {
      ref: "#ZK-88213",
      donor: "Mariama Sow",
      amount: "75,000 CFA",
      method: "Orange Money",
      status: "Success",
      date: "Oct 24, 2023",
      time: "10:05",
    },
  ];

  const filteredPayments = payments.filter((payment) =>
    `${payment.donor} ${payment.ref} ${payment.method}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f8fc] text-[#123b32]">

      {/* ================= DESKTOP / TABLET SIDEBAR ================= */}
      <aside
        className="
          fixed
          left-0
          top-0
          z-40
          hidden
          h-screen
          w-[135px]
          flex-col
          border-r
          border-[#e4e6ef]
          bg-[#f0f1ff]
          px-3
          py-4
          md:flex
          lg:w-[140px]
          xl:w-[145px]
        "
      >
        {/* Logo */}
        <div className="mb-8 px-1">
          <h1 className="text-[16px] font-bold text-[#075b45]">
            EasyZakat
          </h1>
        </div>

        {/* Admin */}
        <div className="mb-7 flex items-center gap-2">
          <div
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#087653]
              text-[10px]
              font-medium
              text-white
            "
          >
            AD
          </div>

          <div className="min-w-0">
            <p className="truncate text-[9px] font-bold text-[#173d34]">
              Ahmad Diop
            </p>

            <p className="text-[7px] text-[#777]">
              Admin Level 1
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`
                  flex
                  w-full
                  items-center
                  gap-2
                  rounded-md
                  px-2
                  py-2
                  text-left
                  text-[9px]
                  transition
                  ${
                    index === 0
                      ? "bg-[#075b45] text-white"
                      : "text-[#344842] hover:bg-white"
                  }
                `}
              >
                <Icon size={13} strokeWidth={1.8} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Settings */}
        <button
          className="
            mt-auto
            flex
            items-center
            gap-2
            px-2
            py-2
            text-[9px]
            text-[#344842]
          "
        >
          <Settings size={13} />
          Settings
        </button>
      </aside>

      {/* ================= MAIN ================= */}
      <main
        className="
          min-h-screen
          pb-20
          md:ml-[135px]
          md:pb-0
          lg:ml-[140px]
          xl:ml-[145px]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1200px]
            px-4
            py-5
            sm:px-5
            md:px-6
            md:py-6
            lg:px-7
            xl:px-8
          "
        >

          {/* ================= HEADER ================= */}
          <header
            className="
              mb-6
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <div>
              <h2
                className="
                  text-[22px]
                  font-bold
                  leading-tight
                  text-[#073f32]
                  sm:text-[25px]
                  md:text-[27px]
                "
              >
                Admin Overview
              </h2>

              <p
                className="
                  mt-1
                  max-w-[280px]
                  text-[10px]
                  leading-relaxed
                  text-[#65716e]
                  sm:text-[11px]
                "
              >
                Real-time Zakat financial intelligence dashboard.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start">
              <button
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#ecebfb]
                  px-4
                  py-2.5
                  text-[10px]
                  font-medium
                  text-[#43514d]
                  transition
                  hover:bg-[#e3e2f5]
                "
              >
                <CalendarDays size={11} />
                <span className="hidden sm:inline">
                  Last 30 Days
                </span>

                <span className="sm:hidden">
                  Last 30 Days
                </span>
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#075b45]
                  px-4
                  py-2.5
                  text-[10px]
                  font-medium
                  text-white
                  transition
                  hover:bg-[#064c3a]
                "
              >
                <Download size={11} />
                Export Report
              </button>
            </div>
          </header>

          {/* ================= STATISTICS ================= */}
          <section
            className="
              grid
              grid-cols-2
              gap-3
              xl:grid-cols-4
            "
          >
            {/* Card 1 */}
            <StatCard
              icon={<Wallet size={15} />}
              iconBg="bg-[#eaf6f2]"
              iconColor="text-[#087653]"
              border="border-[#8aaea4]"
              top="+12.4%"
              title="Total Collected"
              value="42,500,000"
            />

            {/* Card 2 */}
            <StatCard
              icon={<CircleDollarSign size={15} />}
              iconBg="bg-[#f7f4e7]"
              iconColor="text-[#a18a2b]"
              border="border-[#c5b981]"
              top="+8.1%"
              title="Redistributed"
              value="31,200,000"
            />

            {/* Card 3 */}
            <StatCard
              icon={<HandHeart size={15} />}
              iconBg="bg-[#eaf7f3]"
              iconColor="text-[#087653]"
              border="border-[#a7d8cc]"
              top=""
              title="System Balance"
              value="11,300,000"
            />

            {/* Card 4 */}
            <StatCard
              icon={<Clock3 size={15} />}
              iconBg="bg-[#fcebed]"
              iconColor="text-[#b52d3b]"
              border="border-[#d99ca5]"
              top="42 Unresolved"
              title="Pending Payments"
              value="2,840,000"
              danger
            />
          </section>

          {/* ================= CHARTS ================= */}
          <section
            className="
              mt-6
              grid
              grid-cols-1
              gap-4
              xl:grid-cols-[1fr_340px]
            "
          >
            {/* COLLECTION CHART */}
            <div
              className="
                min-h-[250px]
                rounded-lg
                bg-white
                p-5
                shadow-[0_1px_8px_rgba(0,0,0,0.015)]
              "
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-[10px] font-bold text-[#263b36]">
                  Collections per Month
                </h3>

                <div className="flex items-center gap-3 text-[8px]">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#075b45]" />
                    This Year
                  </span>

                  <span className="flex items-center gap-1 text-[#999]">
                    <span className="h-2 w-2 rounded-full bg-[#d6d6d6]" />
                    Last Year
                  </span>
                </div>
              </div>

              <CollectionChart />
            </div>

            {/* DONATION METHOD */}
            <div
              className="
                rounded-lg
                bg-white
                p-5
              "
            >
              <h3 className="text-[10px] font-bold text-[#263b36]">
                Donation by Method
              </h3>

              <div className="flex flex-col items-center">
                {/* DONUT */}
                <div
                  className="
                    relative
                    mt-5
                    h-[125px]
                    w-[125px]
                    rounded-full
                    bg-[conic-gradient(#075b45_0deg_140deg,#c4aa31_140deg_212deg,#d8d8d8_212deg_360deg)]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-[17px]
                      flex
                      flex-col
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                    "
                  >
                    <span className="text-[9px] font-bold">
                      Orange Money
                    </span>

                    <span className="text-[8px] text-[#777]">
                      65%
                    </span>
                  </div>
                </div>

                {/* LEGEND */}
                <div className="mt-5 w-full space-y-2 text-[8px]">
                  <Legend
                    color="bg-[#075b45]"
                    name="Mobile Money"
                    percentage="65%"
                  />

                  <Legend
                    color="bg-[#c4aa31]"
                    name="Card Payment"
                    percentage="20%"
                  />

                  <Legend
                    color="bg-[#d8d8d8]"
                    name="Bank Transfer"
                    percentage="15%"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ================= RECENT PAYMENTS ================= */}
          <section
            className="
              mt-6
              overflow-hidden
              rounded-lg
              bg-white
            "
          >
            {/* Header */}
            <div
              className="
                flex
                flex-col
                gap-3
                border-b
                border-[#f0f0f0]
                px-5
                py-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <h3 className="text-[10px] font-bold text-[#263b36]">
                Recent Payments
              </h3>

              <div
                className="
                  flex
                  h-7
                  w-full
                  max-w-[180px]
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#e3e3e3]
                  px-3
                "
              >
                <Search
                  size={11}
                  className="text-[#999]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search ref, donor..."
                  className="
                    w-full
                    bg-transparent
                    text-[8px]
                    outline-none
                    placeholder:text-[#aaa]
                  "
                />
              </div>
            </div>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[650px] border-collapse">
                <thead>
                  <tr className="bg-[#f5f6fb] text-left">
                    <th className="px-5 py-3 text-[8px] font-bold text-[#68716e]">
                      REF
                    </th>

                    <th className="px-5 py-3 text-[8px] font-bold text-[#68716e]">
                      DONOR
                    </th>

                    <th className="px-5 py-3 text-[8px] font-bold text-[#68716e]">
                      AMOUNT
                    </th>

                    <th className="px-5 py-3 text-[8px] font-bold text-[#68716e]">
                      METHOD
                    </th>

                    <th className="px-5 py-3 text-[8px] font-bold text-[#68716e]">
                      STATUS
                    </th>

                    <th className="px-5 py-3 text-[8px] font-bold text-[#68716e]">
                      DATE
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredPayments.map((payment) => (
                    <PaymentRow
                      key={payment.ref}
                      payment={payment}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================= MOBILE TABLE ================= */}
            <div className="md:hidden">
              {filteredPayments.map((payment) => (
                <MobilePaymentCard
                  key={payment.ref}
                  payment={payment}
                />
              ))}
            </div>

            {/* ================= PAGINATION ================= */}
            <div
              className="
                flex
                flex-col
                gap-3
                border-t
                border-[#f0f0f0]
                px-5
                py-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p className="text-[8px] text-[#777]">
                Showing 4 of 2,450 results
              </p>

              <div className="flex items-center gap-2">
                <button
                  className="text-[#777]"
                  onClick={() =>
                    setPage(Math.max(1, page - 1))
                  }
                >
                  <ChevronLeft size={13} />
                </button>

                <button
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-md
                    bg-[#075b45]
                    text-[8px]
                    text-white
                  "
                >
                  {page}
                </button>

                <button
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    text-[8px]
                    text-[#555]
                  "
                  onClick={() => setPage(page + 1)}
                >
                  2
                </button>

                <button
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    text-[8px]
                    text-[#555]
                  "
                >
                  3
                </button>

                <button
                  className="text-[#777]"
                  onClick={() => setPage(page + 1)}
                >
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          flex
          h-[62px]
          items-center
          justify-around
          border-t
          border-[#e5e5e5]
          bg-white
          px-2
          md:hidden
        "
      >
        <MobileNavItem
          icon={<Home size={18} />}
          label="Home"
          active
        />

        <MobileNavItem
          icon={<Calculator size={18} />}
          label="Calculate"
        />

        <MobileNavItem
          icon={<Gift size={18} />}
          label="Give"
        />

        <MobileNavItem
          icon={<HandHeart size={18} />}
          label="Impact"
        />

        <MobileNavItem
          icon={<UserRound size={18} />}
          label="Profile"
        />
      </nav>
    </div>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  iconBg,
  iconColor,
  border,
  top,
  title,
  value,
  danger = false,
}) {
  return (
    <div
      className={`
        relative
        min-h-[116px]
        rounded-lg
        border
        bg-white
        p-4
        shadow-[0_2px_7px_rgba(0,0,0,0.04)]
        ${border}
      `}
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div
          className={`
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-md
            ${iconBg}
            ${iconColor}
          `}
        >
          {icon}
        </div>

        {top && (
          <span
            className={`
              text-[7px]
              font-bold
              ${danger ? "text-[#b52d3b]" : "text-[#48766a]"}
            `}
          >
            {top}
          </span>
        )}
      </div>

      <p className="mt-3 text-[8px] text-[#707875]">
        {title}
      </p>

      <p
        className="
          mt-1
          text-[16px]
          font-bold
          leading-none
          text-[#244d42]
          sm:text-[17px]
        "
      >
        {value}
      </p>

      <p className="mt-1 text-[12px] font-bold text-[#244d42]">
        CFA
      </p>
    </div>
  );
}


/* =========================================================
   COLLECTION CHART
========================================================= */

function CollectionChart() {
  return (
    <div className="relative h-[165px] w-full">

      <svg
        viewBox="0 0 700 220"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Previous year */}
        <path
          d="
            M 20 165
            C 90 158, 120 150, 175 154
            C 225 158, 270 147, 320 150
            C 375 153, 415 142, 465 145
            C 525 148, 570 130, 625 128
            C 650 127, 665 126, 680 124
          "
          fill="none"
          stroke="#d7d7d7"
          strokeWidth="2"
          strokeDasharray="4 5"
        />

        {/* Current year */}
        <path
          d="
            M 20 160
            C 80 150, 120 138, 170 125
            C 210 114, 235 103, 275 102
            C 320 100, 350 110, 390 105
            C 430 101, 455 90, 490 75
            C 530 59, 565 47, 610 50
            C 635 52, 658 57, 680 55
          "
          fill="none"
          stroke="#315d52"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Points */}
        <circle cx="20" cy="160" r="3" fill="#315d52" />
        <circle cx="170" cy="125" r="3" fill="#315d52" />
        <circle cx="275" cy="102" r="3" fill="#315d52" />
        <circle cx="390" cy="105" r="3" fill="#315d52" />
        <circle cx="490" cy="75" r="3" fill="#315d52" />
        <circle cx="610" cy="50" r="3" fill="#315d52" />
        <circle cx="680" cy="55" r="3" fill="#315d52" />
      </svg>

      {/* Months */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          flex
          justify-between
          px-1
          text-[7px]
          text-[#999]
        "
      >
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Nov</span>
      </div>
    </div>
  );
}


/* =========================================================
   LEGEND
========================================================= */

function Legend({ color, name, percentage }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${color}`}
        />

        <span className="text-[#68716e]">
          {name}
        </span>
      </div>

      <span className="font-bold text-[#344842]">
        {percentage}
      </span>
    </div>
  );
}


/* =========================================================
   DESKTOP PAYMENT ROW
========================================================= */

function PaymentRow({ payment }) {
  return (
    <tr className="border-b border-[#f3f3f3]">
      <td className="px-5 py-4 text-[8px] text-[#777]">
        {payment.ref}
      </td>

      <td className="px-5 py-4">
        <p className="text-[9px] font-bold text-[#263b36]">
          {payment.donor}
        </p>
      </td>

      <td className="px-5 py-4 text-[8px] font-medium">
        {payment.amount}
      </td>

      <td className="px-5 py-4 text-[8px]">
        {payment.method}
      </td>

      <td className="px-5 py-4">
        <span
          className={`
            flex
            items-center
            gap-1
            text-[8px]
            ${
              payment.status === "Success"
                ? "text-[#27745d]"
                : "text-[#9d8a3d]"
            }
          `}
        >
          <span
            className={`
              h-1.5
              w-1.5
              rounded-full
              ${
                payment.status === "Success"
                  ? "bg-[#27745d]"
                  : "bg-[#b5a04a]"
              }
            `}
          />

          {payment.status}
        </span>
      </td>

      <td className="px-5 py-4">
        <p className="text-[8px] text-[#555]">
          {payment.date}
        </p>

        <p className="text-[7px] text-[#999]">
          {payment.time}
        </p>
      </td>
    </tr>
  );
}


/* =========================================================
   MOBILE PAYMENT CARD
========================================================= */

function MobilePaymentCard({ payment }) {
  return (
    <div className="border-b border-[#eeeeee] px-5 py-4">
      <div className="flex items-start justify-between gap-4">

        <div>
          <p className="text-[7px] text-[#999]">
            {payment.ref}
          </p>

          <p className="mt-1 text-[10px] font-bold text-[#263b36]">
            {payment.donor}
          </p>

          <p className="mt-1 text-[8px] text-[#777]">
            {payment.method}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[9px] font-bold text-[#263b36]">
            {payment.amount}
          </p>

          <p
            className={`
              mt-2
              text-[8px]
              ${
                payment.status === "Success"
                  ? "text-[#27745d]"
                  : "text-[#9d8a3d]"
              }
            `}
          >
            ● {payment.status}
          </p>

          <p className="mt-1 text-[7px] text-[#999]">
            {payment.date}
          </p>

          <p className="text-[7px] text-[#999]">
            {payment.time}
          </p>
        </div>

      </div>
    </div>
  );
}


/* =========================================================
   MOBILE NAV ITEM
========================================================= */

function MobileNavItem({ icon, label, active = false }) {
  return (
    <button
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-1
        text-[7px]
        ${
          active
            ? "text-[#075b45]"
            : "text-[#777]"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default AdminDashboard;