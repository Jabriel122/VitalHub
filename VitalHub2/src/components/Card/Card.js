export const Card = () => {
    return(
        <CardView>
            <CardImage source={{uri: "https://github.com/Jabriel122.png"}}/>
            <CardData>
                <CardTitle></CardTitle>
                <CardDataSub>
                    <CardIdade></CardIdade>
                    {/* Iconde  - Eclipse */}
                    <CardRotina></CardRotina>
                </CardDataSub>

                <CardDataSub>
                    {/* Icone */}
                    <CardGreen></CardGreen>
                    <CardDefinition></CardDefinition>
                </CardDataSub>
            </CardData>
        </CardView>
    )
}