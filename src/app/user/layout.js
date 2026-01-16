'use client';
import EncabezadoH2 from "@/app/components/EncabezadoH2";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <EncabezadoH2 nombre="Fulanito" />
                {children}
            </body>
        </html>
    )
}