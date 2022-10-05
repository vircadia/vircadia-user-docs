
# Hosting Quick Start

## Notice: Port Forwarding

There are two ways to make a domain accessible from the outside
Internet.

1.  You may register your domain with the Metaverse server by creating a
    Domain ID in the domain's web panel found at `http://localhost:40100/`. (Experimental)

2.  Alternatively, you can manually open the following ports on your
    router and firewall:

    > 40100 : (tcp) administration web portal
    > 40102 : (udp) main connection for clients

## Windows

1.  Download the Vircadia Developer Client.
2.  Use the **Custom** install option and ensure that both the
    **Vircadia Interface** and **Vircadia Server**
    options are checked. Vircadia Server is the Domain server.

![image](_images/full-install-components.png)

3.  In your start menu, search for and run **Vircadia Server**
4.  Go to `http://localhost:40100/` in your web browser and complete the
    wizard to set up your domain. If the server is on a different
    machine, then replace 'localhost' with its IP address.
5.  In your Vircadia Interface, open the *Explore* app and
    enter *localhost* (or the server's IP address) to get
    there.

## Ubuntu 18.04 Linux (.deb)


1.  Open your terminal.

2.  Run the following command to download the server package:

    ```sh
    wget https://cdn.vircadia.com/dist/domain-server/ubuntu/vircadia-server_2022.1.1-selene-20220303-beb7bd4-0ubuntu1-1_amd64.deb
    ```
3.  Then run this command to update the package index and install the server:
    
    ```sh
    sudo apt-get update && sudo apt-get install ./vircadia-server_2022.1.1-selene-20220303-beb7bd4-0ubuntu1-1_amd64.deb
    ```

4.  Go to *http://[IP address of your server]:40100/* in your web
    browser and complete the wizard to set up your domain.

5.  In your Vircadia Interface, open the *Explore* app and
    enter your server's IP address to get there.
