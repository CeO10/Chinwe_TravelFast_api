import Destination from "../models/destination.models.js";
import Journey from "../models/journey.models.js";
import { NotFoundError, BadRequestError, ConfictError } from "../../lib/error-definitions.js";


export const ScheduleJourney = async(payload, req) => 
    {
        const session = await connectToDatabase();
        session.startTransaction();
        
        try {
            const ScheduleJourney = await Destination.findById(id).session(session);
            return await Journey.save(session)
            
            Destination.availableList -= 1; await Destination.save({session});
            
            if (Destination.availableList < 1) throw new NotFoundError(
                "This destination is not available"
            );
            if (!Destination) throw new BadRequestError("This destination does not exist");
        }
        catch (error)
        {
            await session.abortTransaction();
            throw error
        } finally {session.endSession()}
    };

    
    // admin generate a PDF for a specific journey