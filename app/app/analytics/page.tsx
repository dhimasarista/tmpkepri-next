import { SampleNote } from "@/components/app/sample-note";
import { VisitsAreaChart } from "@/components/app/visits-area-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { topPages } from "@/lib/sample-data";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <SampleNote />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Visits, last 14 days</CardTitle>
          <CardDescription>One point per day</CardDescription>
        </CardHeader>
        <CardContent>
          <VisitsAreaChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Pages by views</CardTitle>
          <CardDescription>Highest first</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead className="text-right">Views</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPages.map((page) => (
                <TableRow key={page.path}>
                  <TableCell className="font-mono text-xs">
                    {page.path}
                  </TableCell>
                  <TableCell className="text-right">{page.views}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
