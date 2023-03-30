export default function CircleView(props) {

    const {area, className} = props;

    return (
        <div className={className}>
            A área do círculo &eacute; <span>{area}</span>cm²
        </div>
    )
}