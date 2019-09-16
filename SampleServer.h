#include <algorithm>
#include <boost/filesystem.hpp>
#include <fstream>
#include <iostream>
#include <vector>
#include <memory>
#include "simple-web-server/client_https.hpp"
#include "simple-web-server/crypto.hpp"
#include "simple-web-server/server_https.hpp"

// Added for the json-example

#include <boost/property_tree/json_parser.hpp>
#include <boost/property_tree/ptree.hpp>


using namespace std;
// Added for the json-example:
using namespace boost::property_tree;

using HttpsServer = SimpleWeb::Server<SimpleWeb::HTTPS>;
using HttpClient = SimpleWeb::Client<SimpleWeb::HTTP>;
