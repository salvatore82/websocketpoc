package it.sdeluca.websocket;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.slf4j.Logger;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class WebSocketController {

    private static final Logger LOGGER = LoggerFactory.getLogger(WebSocketController.class.getName());

    @Autowired
    private SimpMessagingTemplate template;

    @PostMapping
    public void publishWebSocket(String data) {
        LOGGER.debug("Publis the result : " + data);
        template.convertAndSend("/topic/hello", data);
    }
}