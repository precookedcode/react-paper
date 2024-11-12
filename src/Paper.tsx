import React, { ReactNode } from "react";
import FoldedCorner from "./FoldedCorner";

interface PaperProps {
    children: ReactNode;
    size?: "sm" | "md" | "lg"; // Tamaños
    style?: React.CSSProperties; // Estilo adicional
}

const Paper: React.FC<PaperProps> = ({ children, size = "md", style }) => {
    const sizeStyles: Record<string, React.CSSProperties> = {
        sm: { width: "150px", height: "200px" },
        md: { width: "200px", height: "260px" },
        lg: { width: "250px", height: "320px" },
    };

    const styles = createStyles();

    return (
        <div
            style={{
                ...styles.container,
                ...sizeStyles[size],
                ...style,
            }}
        >
            <div style={styles.topBar}></div>
            <FoldedCorner size={size} />
            {children}
        </div>
    );
};

const createStyles = (): Record<string, React.CSSProperties> => ({
    container: {
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px",
    },
    topBar: {
        position: "absolute",
        top: "-10px",
        left: "20px",
        right: "0",
        height: "20px",
        backgroundColor: "#fff",
        borderTopRightRadius: "20px",
    },
});

export default Paper;
