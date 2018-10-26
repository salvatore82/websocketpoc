package it.sdeluca.websocket;

import java.util.logging.Logger;
import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class WebSocketController {
    private static final Logger LOGGER = Logger.getLogger(WebSocketController.class.getName());
    int time = 10;
    @Autowired
    private SimpMessagingTemplate template;

    public void publishWebSocket(String data) {
        LOGGER.info("Publis the result : " + data);
        template.convertAndSend("/topic/hello", data);
    }
}