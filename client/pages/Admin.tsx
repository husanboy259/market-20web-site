import { BarChart, Users, ShoppingBag, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Admin() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your marketplace</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Total Revenue</p>
                <h3 className="text-2xl font-bold text-foreground">$12,500</h3>
              </div>
              <TrendingUp className="w-8 h-8 text-primary/20" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Total Orders</p>
                <h3 className="text-2xl font-bold text-foreground">248</h3>
              </div>
              <ShoppingBag className="w-8 h-8 text-primary/20" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Total Users</p>
                <h3 className="text-2xl font-bold text-foreground">1,234</h3>
              </div>
              <Users className="w-8 h-8 text-primary/20" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Products</p>
                <h3 className="text-2xl font-bold text-foreground">342</h3>
              </div>
              <BarChart className="w-8 h-8 text-primary/20" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Orders</h2>
            <p className="text-muted-foreground mb-6">Order management coming soon</p>
            <Button variant="outline">View All Orders</Button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                Add Product
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Manage Users
              </Button>
              <Button className="w-full justify-start" variant="outline">
                View Reports
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="font-semibold text-blue-900 mb-2">Admin Dashboard Coming Soon</h3>
          <p className="text-blue-800 text-sm">
            Full admin functionality including product management, order tracking, user management, and detailed analytics will be implemented in the next phase.
          </p>
        </div>
      </div>
    </div>
  );
}
