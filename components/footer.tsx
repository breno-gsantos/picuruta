import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return(
        <footer className="bg-foreground text-primary-foreground">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo monocromática */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Image src='/logo.png' alt="Logo Escola de Surf Picuruta Salazar - Monocromática" className="rounded-full grayscale brightness-200 object-contain" width={80} height={80} />
                        <p className="text-sm opacity-70">Escola de Surf Picuruta Salazar</p>
                    </div>

                    {/* CNPJ e Info */}
                    <div className="space-y-3">
                        <h4 className="font-display text-xl">Informações</h4>
                        <p className="text-sm opacity-70">CNPJ: 00.000.000/0001-00</p>
                        <p className="text-sm opacity-70">Praia de Itamambuca, Ubatuba - SP</p>
                        <p className="text-sm opacity-70">Tel: (12) 0000-0000</p>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-3">
                        <h4 className="font-display text-xl">FAQ</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            <li>
                                <Link href="/horarios-inscricao" className="hover:opacity-100 transition-opacity">
                                    Como me inscrever?
                                </Link>
                            </li>
                            <li>
                                <Link href="/aulas-particulares" className="hover:opacity-100 transition-opacity">
                                    Aulas particulares
                                </Link>
                            </li>
                            <li>
                                <Link href="/historia-escola" className="hover:opacity-100 transition-opacity">
                                    Sobre a escola
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mapa */}
                    <div className="space-y-3">
                        <h4 className="font-display text-xl">Localização</h4>
                        <div className="aspect-video w-full rounded overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-45.2!3d-23.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI0JzAwLjAiUyA0NcKwMTInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Localização da Escola de Surf"
                            />
                        </div>
                    </div>
                </div>

            {/* Prefeitura */}
          <div className="mt-8 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded flex items-center justify-center">
                <span className="text-xs text-center">Prefeitura</span>
              </div>
              <p className="text-xs opacity-50">
                Apoio: Prefeitura Municipal
              </p>
            </div>
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} Escola de Surf Picuruta Salazar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    )
}