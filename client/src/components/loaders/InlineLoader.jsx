import HashLoader from "react-spinners/HashLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const styles = {
    loaderContainer : {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    }
}


export function InlineLoader({loading}){

    return(
        <div style={styles.loaderContainer}>
                
            <HashLoader
            color="blue"
            loading={loading}
            cssOverride={override}
            size={50}
            />

        </div>
    )
}