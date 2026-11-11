import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Compass,
  FileText,
  Flame,
  Ship,
  Sparkles,
  Users,
} from "lucide-react";
import { EarningsCard } from "@/components/app/earnings-card";
import { HighlightsCard } from "@/components/app/highlights-card";
import { OrdersTable } from "@/components/app/orders-table";
import { PageHeader } from "@/components/app/page-header";
import { StatTile } from "@/components/app/stat-tile";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Portal Internal Kader TMP Kepri"
        description="Ringkasan konsolidasi keanggotaan dan agenda gotong royong se-Kepulauan Riau"
        actions={
          <Button
            variant="outline"
            asChild
            className="border-primary/30 text-primary hover:bg-primary/5"
          >
            <Link href="/daftar">+ Rekrut Kader Baru</Link>
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        <StatTile
          highlight
          icon={Users}
          value="5.150"
          label="Total Kader Aktif Se-Kepri"
        />
        <StatTile
          icon={Compass}
          value="7 DPC"
          label="Kabupaten & Kota Lengkap"
        />
        <StatTile
          icon={Award}
          value="124"
          label="Aksi Sosial & Lingkungan"
        />
        <StatTile
          icon={Flame}
          value="42"
          label="Kaderisasi Sedang Berjalan"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <HighlightsCard />
        <div className="min-w-0 lg:col-span-2">
          <EarningsCard />
        </div>
      </div>

      <OrdersTable />
    </div>
  );
}
