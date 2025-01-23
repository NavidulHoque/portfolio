import RefProvider from "@/context/RefContext";
import WindowProvider from "@/context/WindowContext";

export default function ContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <RefProvider>
            <WindowProvider>
                {children}
            </WindowProvider>
        </RefProvider>
    )
}
