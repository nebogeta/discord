import './globals.css'
import type {Metadata} from 'next'
import {Raleway} from 'next/font/google'
import {ClerkProvider} from "@clerk/nextjs";
import {ThemeProvider} from "@providers/theme-provider";
import {cn} from "@lib/utils";
import {ModalProvider} from "@providers/modal-provider";
import {SocketProvider} from "@providers/socket-provider";
import {QueryProvider} from "@providers/query-provider";

const font = Raleway({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Discord',
    description: 'Discord clone built with Next.js and Prisma.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            <body className={cn(font.className, "bg-white dark:bg-slate-700")}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="discord-theme">
                <SocketProvider>
                    <ModalProvider/>
                    <QueryProvider>
                        {children}
                    </QueryProvider>
                </SocketProvider>
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    )
}
