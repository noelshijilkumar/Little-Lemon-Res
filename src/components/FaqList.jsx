import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react";

function FaqList({data}) {

       // Handle invalid or empty data
    if (!Array.isArray(data) || data.length === 0) {
        return <Box>No FAQs available at this time.</Box>;
    }

    return (
        <Accordion allowToggle maxWidth={{ base: 'md' }}>
            {data.map((item) => (
                <AccordionItem key={item.id}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                {item.question || 'Question'}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {item.answer || 'No anwser avaliable.'}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default FaqList;