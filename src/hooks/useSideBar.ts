"use client";
import { useState, useEffect } from "react";
import {
  Plus,
  Calendar,
  //   Mail,
  //   Package,
  //   MapPinHouse,
  //   TableProperties,
  Settings,
  HelpCircle,
} from "lucide-react";

export interface RouteItem {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  text: string;
}

export const useSidebar = () => {
  const [mainRoutes, setMainRoutes] = useState<RouteItem[]>([]);
  const [bottomRoutes, setBottomRoutes] = useState<RouteItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      setLoading(true);
      try {
        const main: RouteItem[] = [
          { href: "/crear-evento", icon: Plus, text: "Crear Evento" },
          { href: "/mis-eventos", icon: Calendar, text: "Mis Eventos" },
          //   { href: "/bandeja", icon: Mail, text: "Bandeja" },
          //   { href: "/paquetes", icon: Package, text: "Paquetes" },
          //   {
          //     href: "/catalogo-salones",
          //     icon: MapPinHouse,
          //     text: "Catálogo Salones",
          //   },
          //   { href: "/servicios", icon: TableProperties, text: "Servicios" },
        ];

        const bottom: RouteItem[] = [
          { href: "/settings", icon: Settings, text: "Settings" },
          { href: "/help", icon: HelpCircle, text: "Help" },
        ];

        setMainRoutes(main);
        setBottomRoutes(bottom);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return { mainRoutes, bottomRoutes, loading };
};
