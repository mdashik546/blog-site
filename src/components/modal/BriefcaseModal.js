import { RxCross1 } from 'react-icons/rx';

const BriefcaseModal = ({ handleClose,briefcaseModalRef }) => {
    return (

        <div ref={briefcaseModalRef}>
            <div className="flex   justify-end p-2">
                <button onClick={() => handleClose("RiBriefcase2Line")}>
                    <RxCross1
                        className="text-white hover:-rotate-90 duration-300"
                        size={20}
                    />
                </button>
            </div>
            <div className="text-white text-center  pt-24">
                No products in the cart.
            </div>
        </div>

    );
};

export default BriefcaseModal;

