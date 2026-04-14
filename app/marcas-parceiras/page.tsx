const brands = [
  {
    name: "Keets",
    description:
      "A Keets é uma marca brasileira dedicada ao mundo do surf, oferecendo produtos de alta qualidade para surfistas de todos os níveis. Com design inovador e materiais de primeira linha, a Keets se consolidou como uma referência no mercado de surf nacional.",
  },
  {
    name: "Salazar Ocean",
    description:
      "A Salazar Ocean é a marca própria da Escola de Surf Picuruta Salazar. Desenvolvida com a experiência de décadas no surf, a marca oferece pranchas, acessórios e vestuário pensados especialmente para o surfista brasileiro, unindo performance e estilo.",
  },
];

export default function MarcasParceirasPage(){
    return(
        <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-6xl text-center mb-12">
            Marcas Parceiras
          </h1>

          <div className="space-y-12">
            {brands.map((item) => (
              <div key={item.name} className="flex flex-col md:flex-row gap-8 items-center bg-card p-8 rounded-lg shadow-sm">
                {/* Logo da marca */}
                <div className="w-48 h-48 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm text-center">
                    Logo {item.name}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-3xl mb-4">{item.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}