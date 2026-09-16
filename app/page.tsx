export default function Home() {
    const board = [];

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            board.push(
                <div
                    key={row * 8 + col}
                    className={`h-12 w-12 ${
                        (row + col) % 2 === 0 ? "bg-white" : "bg-black"
                    }`}
                ></div>
            );
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="grid grid-cols-8">
                {board}
            </div>
        </div>
    );
}