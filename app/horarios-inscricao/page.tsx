import { SubscriptionForm } from "@/components/forms/subscription-form";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const hours = [
  { day: "Segunda", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Terça", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Quarta", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Quinta", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Sexta", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Sábado", class1: "09:00 - 11:00", class2: "—" },
];

export default function AulasPage(){
    return(
        <section className="py-16 bg-background">
            <div className="container mx-auto max-w-4xl">
                <h1 className="font-display text-6xl text-center mb-12">Horários & Inscrição</h1>

                {/* Tabela de Horários */}
                <div className="mb-16 overflow-x-auto">
                    <h2 className="font-display text-4xl mb-6">Horários das Aulas</h2>
                    <div className="rounded-xl border bg-card overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="font-display text-base">Dia</TableHead>
                                    <TableHead className="font-display text-base">Turma 1</TableHead>
                                    <TableHead className="font-display text-base">Turma 2</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {hours.map((hour, index) => (
                                    <TableRow key={hour.day} className="transition-colors hover:bg-muted/60">
                                        <TableCell className="font-semibold text-foreground">{hour.day}</TableCell>
                                        <TableCell>{hour.class1}</TableCell>
                                        <TableCell>{hour.class2}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <SubscriptionForm />            
                </div>
        </div>
      </section>
    )
}