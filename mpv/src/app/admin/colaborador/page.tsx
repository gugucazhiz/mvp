import { Typography } from "@mui/material"

import FormColaborador from "@/app/ui/forms/formscolaborator"

export default function PageColaborador() {
    return (
        <div>
            <div
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h2"> Formulario </Typography>

                <FormColaborador />
            </div>
        </div>
    )
}