startup_message off
 
split
split
screen -t {{ screen_host }}-bash
focus
screen -t {{ screen_host }}-syslog tail -f /var/log/syslog
screen -t {{ screen_host }}-docker_logs sudo docker logs -f www_web_1
focus
screen -t {{ screen_host }}-iftop sudo iftop
screen -t {{ screen_host }}-top top
focus