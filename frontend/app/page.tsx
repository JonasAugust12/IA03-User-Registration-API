import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Welcome to User Registration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">22127419: Nguyễn Minh Toàn</h3>
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <Link href="/signup" className="w-full">
              <Button className="w-full" size="lg">
                Get Started - Sign Up
              </Button>
            </Link>
            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full" size="lg">
                Already have an account? Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
