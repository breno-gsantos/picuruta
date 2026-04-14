import { Card } from "./ui/card";

const cardText = [
    {title: 'Aulas em Grupo', label: 'Aprenda a surfar com instrutores experientes em um ambiente seguro e divertido.'},
    {title: 'Aulas Particulares', label: 'Aulas personalizadas para todos os níveis, do iniciante ao avançado.'},
    {title: 'Competições', label: 'Participe de campeonatos e eventos organizados pela escola.'}
]

export function Info(){
    return(
        <section className="py-20 bg-background">
            <div className="container mx-auto">
                <h2 className="font-display text-5xl text-center mb-12">Escola de Surf Picuruta Salazar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {cardText.map((card) => (
                        <Card key={card.title} className="p-8 rounded-lg shadow-sm">
                            <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                                <span className="text-muted-foreground text-sm">Ícone</span>
                            </div>
                            <h3 className="font-display text-2xl mb-2">{card.title}</h3>
                            <p className="text-muted-foreground">{card.label}</p>
                        </Card>
                    ))}
                </div>
            </div>
      </section>
    )
}