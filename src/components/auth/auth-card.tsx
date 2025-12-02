import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  description: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
  children: ReactNode;
};

export default function AuthCard({
  title,
  description,
  footerText,
  footerLink,
  footerLinkText,
  children,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          {footerText}{" "}
          <Link href={footerLink} className="underline text-primary hover:text-primary/80">
            {footerLinkText}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
