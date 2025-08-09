import DeliveryTitle from "../DeliveryTitle/DeliveryTitle";
import { StyledSectionDelivery } from "./SectionDelivery.style";
import { IoBicycleSharp } from "react-icons/io5";

export default function SectionDelivery() {
    return (

        <StyledSectionDelivery>
            <IoBicycleSharp size={2} />
            <DeliveryTitle />
        </StyledSectionDelivery>
    )
}