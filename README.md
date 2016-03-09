ansible-screenrc
================

This Ansible role creates a .screenrc file that will split the screen into three
named windows. The first window is dedicated to `bash`. The second window has
two screens for logs (syslog and docker logs). The third window has two screens
dedicated to system function (top and iftop).

Requirements
------------

This role assumes that the target computer is running a debian based OS.

Role Variables
--------------

The only variable in this role is `screen_host` and it is used to name each
screen.

Dependencies
------------

This role has no dependencies

Example Playbook
----------------

Here is an example usage:

    - hosts: servers
      roles:
         - { role: "screenrc", screen_host: "www.example.com" }

License
-------

BSD

Author Information
------------------

* [JP Grace](https://github.com/jpgrace)
